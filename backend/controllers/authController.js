
import { pool } from "../libs/database.js";
import { comparePassword, createJWT, hashPassword } from "../libs/index.js";

export const signupUser = async(req, res) => {
    try {
        const { firstname, email, password } = req.body;

        if (!(firstname || email || password)) {
            return res.status(404).json({
                status: "failed",
                message: "Provide required fields!",
            })
        }

        const userExist = await pool.query({
            text: "SELECT EXISTS (SELECT * FROM tbluser WHERE email = $1)",
            values: [email],
        })

        if (userExist.rows[0].exists) {
            return res.status(409).json({
                status: "failed",
                message: "Email address already exists. Try again"
            })
        }

        const hashedPassword = await hashPassword(password);

        const user = await pool.query({
            text: `INSERT INTO tbluser(firstname, email, password) VALUES ($1, $2, $3) RETURNING *`,
            values: [firstname, email, hashedPassword],
        });

        user.rows[0].password = undefined

        res.status(201).json({
            status: "success",
            message: "User account created successfully",
            user: user.rows[0],
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: "failed", message: error.message });
    }
}
export const signinUser = async(req, res) => {
    try {
        const { email, password } = req.body;

        const result = await pool.query({
            text: `SELECT * FROM tbluser WHERE email = $1`,
            values: [email]
        });

        const user = result.rows[0];
        if (!user) {
            return res.status(404)
                    .json({
                        status: "failed",
                        message: "Invalid email or password",
                    });
        }

        const isMatch = await comparePassword(password, user?.password);
        if (!isMatch) {
            return res.status(404).json({
                status: "Failed",
                message: "Invalid email or password"
            });
        }

        const token = createJWT(user.id);
        user.password = undefined;

         res.status(200).json({
            status: "success",
            message: "Login successfull",
            user, token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: "failed", message: error.message });
    }
}
// export const signinUser = async(req, res) => {
//     try {

//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).json({ status: "failed", message: error.message });
//     }
// }