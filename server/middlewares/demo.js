

//check if demo user
exports.isDemo = async (req, res, next)=> {
    console.log(req.user.email);
    if (req.user.email === "demostudent@gmail.com" || req.user.email === "demoadmin@gmail.com") {
        return res.status(401).json({
            success: false,
            message: "This is a Demo User",
        });
    }
    next();
}