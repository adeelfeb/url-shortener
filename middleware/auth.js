const { getUser } = require("../service/auth");

const restrictToLoginUserOnly = async (req, res, next) => {
    try {
        // Retrieve user UID from cookies
        const userUid = req.cookies.uid;

        // If user UID is not present in cookies, redirect to login
        if (!userUid) {
            return res.redirect("/login");
        }

        // Attempt to fetch user from the database or service
        const user = await getUser(userUid);

        // If user is not found, redirect to login
        if (!user) {
            return res.redirect("/login");
        }

        // Attach the user to the request object for use in subsequent handlers
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Log the error and respond with a 500 status code
        console.error("Error in restrictToLoginUserOnly middleware:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    restrictToLoginUserOnly
};
