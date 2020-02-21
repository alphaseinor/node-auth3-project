
function authz(req, res, next) {
   if (req.token && department === req.token.department) {
      next()
   } else {
      res.status(403).json({ message: 'wrong department' })
   }
}


module.exports = authz