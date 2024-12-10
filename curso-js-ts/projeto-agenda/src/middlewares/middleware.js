exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.csp = (req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net"
      );
      next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
}

exports.checkCsrfError= (erro, req, res, next) => {
    if(erro) {
        return res.render('404');
    }

    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}


exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        req.flash('errors', 'Você precisa fazer login.');
        req.session.save(() => res.redirect('/'));
        return;
    }

    next();
}