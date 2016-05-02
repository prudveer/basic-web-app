angular.module('templates-app', ['about/about.tpl.html', 'account/login.tpl.html', 'account/register.tpl.html', 'account/search.tpl.html', 'blog/manage-blogs.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/login.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "      Login\n" +
    "  </h1>\n" +
    "  <form ng-submit=\"login()\">\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Username:</label>\n" +
    "          <input type=\"text\" ng-model=\"account.name\" class=\"form-control\"/>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Password:</label>\n" +
    "          <input type=\"password\" ng-model=\"account.password\" class=\"form-control\"/>\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-success\" type=\"submit\">Login</button>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/register.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "      Register\n" +
    "  </h1>\n" +
    "  <form ng-submit=\"register()\">\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Username:</label>\n" +
    "          <input type=\"text\" ng-model=\"account.name\" class=\"form-control\" />\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label>Password:</label>\n" +
    "          <input type=\"password\" ng-model=\"account.password\" class=\"form-control\" />\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-success\" type=\"submit\">Register</button>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/search.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" ng-model=\"q\" placeholder=\"account name\"/>\n" +
    "    </div>\n" +
    "\n" +
    "    <table class=\"table table-striped\">\n" +
    "        <th>Account Name</th>\n" +
    "        <th>Actions</th>\n" +
    "        <tr ng-repeat=\"blog in blogs | filter:q\">\n" +
    "            <td>{{blog.name}}</td>\n" +
    "            <td>\n" +
    "                <a ui-sref=\"manageBlogs({accountId:account.rid})\" class=\"btn btn-large btn-default\">\n" +
    "                    Manage\n" +
    "                </a>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
}]);

angular.module("blog/manage-blogs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog/manage-blogs.tpl.html",
    "<div class=\"row no-gutters\">\n" +
    "    <h1>Blog Management For {{name}}</h1>\n" +
    "</div>\n" +
    "<div class=\"row no-gutters\">\n" +
    "    <div class=\"input-group component-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" ng-model=\"newBlogName\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "        <button class=\"btn btn-default\" type=\"button\" ng-click=\"createBlog(newBlogName)\">Create New Blog!</button>\n" +
    "      </span>\n" +
    "    </div><!-- /input-group -->\n" +
    "</div>\n" +
    "<div class=\"row no-gutters\">\n" +
    "    <table class=\"table table-striped\">\n" +
    "        <th>Blog Name</th>\n" +
    "        <th>Action</th>\n" +
    "        <tr ng-repeat=\"blog in blogs\">\n" +
    "            <td>{{blog.title}}</td>\n" +
    "            <td>\n" +
    "                <a ui-sref=\"manageBlogs({accountId:account.rid})\" class=\"btn btn-large btn-default\">\n" +
    "                    Delete\n" +
    "                </a>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>BakerHaus</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Enter what ever you want\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"btn-group\" ng-hide=\"isLoggedIn()\">\n" +
    "    <a ui-sref=\"login\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Login\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "    <div class=\"btn-group\" ng-show=\"isLoggedIn()\">\n" +
    "        <a ng-click=\"logout()\" class=\"btn btn-large btn-default\">\n" +
    "            <i class=\"fa fa-book\"></i>\n" +
    "            Logout\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container shadow\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-lg-12\">\n" +
    "      <br>\n" +
    "      <h3 align=\"center\">ADD ACCOUNT</h3>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-primary panel-size col-lg-offset-1\" ng-controller=\"HomeCtrl\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">Account Information</h3>\n" +
    "    </div>\n" +
    "\n" +
    "    <form name=\"addAccountForm\" ng-submit=\"insertAccount()\" novalidate=\"novalidate\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label for=\"name\" class=\"control-label\"><span class=\"required-field\">*</span>Freight Invoice No</label>\n" +
    "              <input class=\"form-control\"\n" +
    "                     id=\"name\"\n" +
    "                     name=\"name\"\n" +
    "                     type=\"text\"\n" +
    "                     placeholder=\"Freight Invoice No\"\n" +
    "                     ng-model=\"FreightInvoiceNo\"\n" +
    "                     required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Date</label><br>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"DATE\"\n" +
    "                     placeholder=\"Date\"\n" +
    "                     ng-model=\"date\">\n" +
    "            </div>\n" +
    "            <!--<div class=\"col-md-6\">\n" +
    "              <label>Phone Number</label> <br>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"tel\"\n" +
    "                     placeholder=\"Phone Number\"\n" +
    "                     ng-model=\"phone\"\n" +
    "                     ng-pattern=\"/^\\+?\\d{3}[- ]?\\d{3}[- ]?\\d{4}$/\"\n" +
    "                     ng-pattern-err-type=\"badPhoneNumber\">\n" +
    "            </div>-->\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Freight Charge CDN$:</label>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"text\"\n" +
    "                     placeholder=\"Freight Charge CDN$\"\n" +
    "                     ng-model=\"FreightChargeCDN\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Lumper Fees CDN$:</label>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"text\"\n" +
    "                     placeholder=\"Lumper Fees CDN$\"\n" +
    "                     ng-model=\"LumperFeesCDN\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>HST TAX CDN$:</label>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"text\"\n" +
    "                     placeholder=\"HST TAX CDN$\"\n" +
    "                     ng-model=\"HSTTAXCDN\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Remarks:</label>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"text\"\n" +
    "                     placeholder=\"Remarks:\"\n" +
    "                     ng-model=\"Remarks\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <!--<div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Headquarters</label>\n" +
    "              <input class=\"form-control\" type=\"text\" placeholder=\"Headquarters\" ng-model=\"headquarters\">\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Doing Business as</label>\n" +
    "              <input class=\"form-control\" type=\"text\" placeholder=\"Doing Business as\" ng-model=\"dbaName\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>No of Employees</label>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"text\"\n" +
    "                     placeholder=\"No of employess\"\n" +
    "                     ng-model=\"numberOfEmployees\"\n" +
    "                     ng-pattern=\"/^[0-9]*$/\"\n" +
    "                     ng-pattern-err-type=\"badNumber\">\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Annual Revenue ($)</label>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"text\"\n" +
    "                     placeholder=\"Annual revenue\"\n" +
    "                     ng-model=\"annualRevenue\"\n" +
    "                     ng-pattern=\"/^[0-9]*$/\"\n" +
    "                     ng-pattern-err-type=\"badNumber\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Logo</label>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"text\"\n" +
    "                     placeholder=\"Logo URL\"\n" +
    "                     ng-model=\"logo\"\n" +
    "                     ng-pattern=\"/(ftp|http|https):\\/\\/[^ ]+\\.(jpeg|jpg|gif|png)$/\"\n" +
    "                     ng-pattern-err-type=\"badLogo\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-12\">\n" +
    "            <h3>Address</h3>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Line 1</label>\n" +
    "              <input class=\"form-control\" type=\"text\" placeholder=\"Line 1\" ng-model=\"line1\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Line 2</label>\n" +
    "              <input class=\"form-control\" type=\"text\" placeholder=\"Line 2\" ng-model=\"line2\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>City</label>\n" +
    "              <input class=\"form-control\" type=\"text\" placeholder=\"City\" ng-model=\"city\">\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Zip Code</label>\n" +
    "              <input class=\"form-control\"\n" +
    "                     type=\"text\"\n" +
    "                     placeholder=\"Zip Code\"\n" +
    "                     ng-model=\"zipCode\"\n" +
    "                     ng-pattern=\"/^[0-9]{5}(?:-[0-9]{4})?$/\"\n" +
    "                     ng-pattern-err-type=\"badZipCode\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>State</label>\n" +
    "              <select class=\"form-control\" id=\"state\" name=\"state\" ng-model=\"state\">\n" +
    "                <option selected disabled value=\"\">State</option>\n" +
    "                <option value=\"AK\">Alaska</option>\n" +
    "                <option value=\"AL\">Alabama</option>\n" +
    "                <option value=\"AR\">Arkansas</option>\n" +
    "                <option value=\"AZ\">Arizona</option>\n" +
    "                <option value=\"CA\">California</option>\n" +
    "                <option value=\"CO\">Colorado</option>\n" +
    "                <option value=\"CT\">Connecticut</option>\n" +
    "                <option value=\"DC\">District of Columbia</option>\n" +
    "                <option value=\"DE\">Delaware</option>\n" +
    "                <option value=\"FL\">Florida</option>\n" +
    "                <option value=\"GA\">Georgia</option>\n" +
    "                <option value=\"HI\">Hawaii</option>\n" +
    "                <option value=\"IA\">Iowa</option>\n" +
    "                <option value=\"ID\">Idaho</option>\n" +
    "                <option value=\"IL\">Illinois</option>\n" +
    "                <option value=\"IN\">Indiana</option>\n" +
    "                <option value=\"KS\">Kansas</option>\n" +
    "                <option value=\"KY\">Kentucky</option>\n" +
    "                <option value=\"LA\">Louisiana</option>\n" +
    "                <option value=\"MA\">Massachusetts</option>\n" +
    "                <option value=\"MD\">Maryland</option>\n" +
    "                <option value=\"ME\">Maine</option>\n" +
    "                <option value=\"MI\">Michigan</option>\n" +
    "                <option value=\"MN\">Minnesota</option>\n" +
    "                <option value=\"MO\">Missouri</option>\n" +
    "                <option value=\"MS\">Mississippi</option>\n" +
    "                <option value=\"MT\">Montana</option>\n" +
    "                <option value=\"NC\">North Carolina</option>\n" +
    "                <option value=\"ND\">North Dakota</option>\n" +
    "                <option value=\"NE\">Nebraska</option>\n" +
    "                <option value=\"NH\">New Hampshire</option>\n" +
    "                <option value=\"NJ\">New Jersey</option>\n" +
    "                <option value=\"NM\">New Mexico</option>\n" +
    "                <option value=\"NV\">Nevada</option>\n" +
    "                <option value=\"NY\">New York</option>\n" +
    "                <option value=\"OH\">Ohio</option>\n" +
    "                <option value=\"OK\">Oklahoma</option>\n" +
    "                <option value=\"OR\">Oregon</option>\n" +
    "                <option value=\"PA\">Pennsylvania</option>\n" +
    "                <option value=\"PR\">Puerto Rico</option>\n" +
    "                <option value=\"RI\">Rhode Island</option>\n" +
    "                <option value=\"SC\">South Carolina</option>\n" +
    "                <option value=\"SD\">South Dakota</option>\n" +
    "                <option value=\"TN\">Tennessee</option>\n" +
    "                <option value=\"TX\">Texas</option>\n" +
    "                <option value=\"UT\">Utah</option>\n" +
    "                <option value=\"VA\">Virginia</option>\n" +
    "                <option value=\"VT\">Vermont</option>\n" +
    "                <option value=\"WA\">Washington</option>\n" +
    "                <option value=\"WI\">Wisconsin</option>\n" +
    "                <option value=\"WV\">West Virginia</option>\n" +
    "                <option value=\"WY\">Wyoming</option>\n" +
    "              </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <label>Country</label>\n" +
    "              <select class=\"form-control\" name=\"country\" ng-model=\"country\">\n" +
    "                <option selected disabled value=\"\">Country</option>\n" +
    "                <option value=\"US\">United States</option>\n" +
    "              </select>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>-->\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-11\">\n" +
    "            <button type=\"submit\" class=\"btn btn-primary pull-right\">Submit</button>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-1\">\n" +
    "            <a ui-sref=\"main.account\" class=\"btn btn-danger pull-right\" role=\"button\">Cancel</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);
