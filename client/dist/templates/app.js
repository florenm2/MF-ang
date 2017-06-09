angular.module('templates.app', ['404.tpl.html', 'about.tpl.html', 'account/account.tpl.html', 'account/checkout/checkout.tpl.html', 'account/checkout/order-summary.tpl.html', 'account/purchaseHistory/purchaseHistory.tpl.html', 'account/purchaseHistory/purchaseHistoryOne.tpl.html', 'account/settings/account-settings.tpl.html', 'account/verification/account-verification.tpl.html', 'admin/Pricing/admin-pricing-modal.tpl.html', 'admin/Pricing/admin-pricing.tpl.html', 'admin/Sales/admin-sales.tpl.html', 'admin/accounts/admin-account.tpl.html', 'admin/accounts/admin-accounts.tpl.html', 'admin/activity/activity.tpl.html', 'admin/admin-account-settings/admin-account-settings.tpl.html', 'admin/admin-groups/admin-group.tpl.html', 'admin/admin-groups/admin-groups.tpl.html', 'admin/admin.tpl.html', 'admin/administrators/admin-administrator.tpl.html', 'admin/administrators/admin-administrators.tpl.html', 'admin/developers/developers.tpl.html', 'admin/purchase-history/admin-purchase-histories.tpl.html', 'admin/purchase-history/admin-purchase-histories2.tpl.html', 'admin/purchase-history/admin-purchase-history.tpl.html', 'admin/statuses/admin-status.tpl.html', 'admin/statuses/admin-statuses.tpl.html', 'admin/users/admin-user.tpl.html', 'admin/users/admin-users.tpl.html', 'contact.tpl.html', 'footer.tpl.html', 'header.tpl.html', 'login/forgot/login-forgot.tpl.html', 'login/login.tpl.html', 'login/reset/login-reset.tpl.html', 'main.tpl.html', 'pricing/checkout/checkout.tpl.html', 'pricing/information-modal.tpl.html', 'pricing/information/information.tpl.html', 'pricing/login-modal.tpl.html', 'pricing/login-modal2.tpl.html', 'pricing/panel-modal.tpl.html', 'pricing/pricing.tpl.html', 'sidebar.tpl.html', 'signup/signup.tpl.html', 'specs.tpl.html']);

angular.module("404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("404.tpl.html",
    "<h1>Page Not Found</h1>\n" +
    "<p class=\"lead\">The resource you requested doesn't exist.</p>\n" +
    "");
}]);

angular.module("about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about.tpl.html",
    "<div role=\"main\" class=\"main\">\n" +
    "                \n" +
    "                <div class=\"\" >\n" +
    "                \n" +
    "                    <div class=\"container\">\n" +
    "                        <div class=\"\">\n" +
    "                            <h1 class=\"heading-font heading-tertiary spacing-top-xlg spacing-bot-sm\">Our Mission</h1>\n" +
    "                            <h4 class=\"subheading-font heading-secondary italic spacing-top-sm spacing-bot-md\">Revolutionizing the Solar Industry</h4>\n" +
    "\n" +
    "                            <p class=\"test-color-tertiary primary-font\">SafeConnect is an early stage company that has successfully built and tested prototypes of its products for compliance with relevant codes and standards in its own lab facilities and at the National Renewable Energy Laboratory (NREL). The company’s research and development to date has been conducted with support from the US Department of Energy under its SunShot Initiative program. SafeConnect’s products are currently undergoing the UL certification process and the company will commence commercial sales in 2016.</p>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    \n" +
    "                    <div class=\"container\">\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <hr class=\"tall\">\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"container\">\n" +
    "                        <!-- Section Title -->\n" +
    "                        <div class=\"section-title\">\n" +
    "                            <h1 class=\"heading-font heading-tertiary spacing-top-md spacing-bot-sm\">Meet Our Team</h1>\n" +
    "                            <h4 class=\"subheading-font heading-secondary italic spacing-top-sm spacing-bot-xlg\">About Our Executive Leadership</h4>\n" +
    "                        </div>              \n" +
    "                        <!--/Section Title -->\n" +
    "\n" +
    "                        <div>\n" +
    "                            <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Todd Georgopapadakos</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Founder</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">An entrepreneurial leader who has built, operated and exited businesses in the solar, software, printing, fine art, and franchising arenas. At SafeConnect, Todd is the co-leader and co-architect of all of the company’s strategic planning and decision-making.  From 2009 to 2014, Todd was the Managing Principal of residential PV contractor RevoluSun LLC, which installed approximately 5,000 systems; President of RevoluSun Solar Corp., a franchisor of solar sales /contracting opportunities; and Vice-President of RevoluSun Energy Inc., a developer of residential solar sector IP. Todd is also a Hawaii licensed General Contractor. In 2009 he received the Governor of Hawaii’s Innovation Award, for his work in renewable energy. Todd holds a BA in English from Boston University.</p>  \n" +
    "                        </div>\n" +
    "\n" +
    "                         <div>\n" +
    "                           <br>\n" +
    "                             <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Mark Duda</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Founder</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">An entrepreneur who came to the solar industry following a career in quantitative public policy analysis. At SafeConnect, Mark is the co-leader and co-architect of all of the company’s strategic planning and decision-making, and is responsible for the company’s regulatory affairs. Previously, Mark was President of RevoluSun Energy Inc., which was sold to SunPower Corporation in 2014; and co-founded of RevoluSun LLC and RevoluSun Solar Corp. both of which he successfully exited in 2014. Mark is an acknowledged expert in renewable energy policy, who has served as President of several solar trade organizations, leading the Hawaii solar industry’s legislative initiatives and intervention more than a dozen regulatory proceedings. Mark he has won numerous awards for his work in renewable energy including: the Hawaii Venture Capital Association’s Clean Tech Entrepreneur of the Year; Hawaii Business Magazine's “Twenty for the Next 20,” recognizing emerging leaders in the state; and the Governor of the State of Hawaii’s Innovation Award, which he shared with his business partner Todd Georgopapadakos. Mark has and MA in Economics and a Ph.D. in Economic Geography.</p>  \n" +
    "                        </div>\n" +
    "\n" +
    "                        <div>\n" +
    "                            <br>\n" +
    "                             <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Brian Cunningham</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Chief Technology Officer</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">Responsible for the electrical design and physical construction of all SafeConnect eBOS devices/componentry since the company’s inception, and has managed development of the firmware required to operate the SmartBox controller. Brian has overseen the NREL’s testing of the SmartBox system and is responsible for shepherding SafeConnect’s products through the UL certification process. Prior to joining SafeConnect, Brian managed the installation of RevoluSun LLC’s roughly 5,000 residential PV systems in Hawaii and he has over a decade of experience with design, installation, and operation of electric power systems worldwide, including at McMurdo Station in Antarctica, where he was responsible for operating the base’s wind-diesel electrical grid. Brian has a BS in Physics from California Polytechnic State University.</p>  \n" +
    "                        </div>\n" +
    "\n" +
    "                         <div>\n" +
    "                            <br>\n" +
    "                             <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Rod Braunthal</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Director of Product Integration &amp; Adoption</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">With over 20 years of experience in electrical and construction drafting, design, and project permitting at the City, County, State, and Federal levels, Rod oversees SafeConnect’s efforts to achieve adoption of SafeConnect’s eBOS solution by AHJ’s. With Mark and Todd, Rod also successfully founded, built, and exited the RevoluSun Companies. Since joining the solar industry he has been directly responsible for the design of more than 50 MW of residential and commercial PV, all of which has been installed across various jurisdictions in Hawaii, Massachusetts, and New York.</p>  \n" +
    "                        </div>      \n" +
    "\n" +
    "                        <div>\n" +
    "                            <br>\n" +
    "                             <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Zachary McNish</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Chief Operating Officer &amp; General Counsel</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">Manages the day-to-day business operations of SafeConnect Solar. He has previously served as an attorney both in private practice in-house for several clean-energy companies. Zach has been recognized as one of Hawaii’s ’40 under Forty’ young business leaders by Pacific Business News and as one of Hawaii Business Magazine’s Twenty for the Next 20. Prior to entering law school, Zach served for three years in the Peace Corps in Panama, and later returned to the country to successfully advocate for changes in law that conveyed land rights to previously disenfranchised indigenous communities.  Zach holds a BA in History from Williams College, and JD and MA degrees from Duke University.</p>  \n" +
    "                        </div>    \n" +
    "\n" +
    "                        <div>\n" +
    "                           <br>\n" +
    "                            <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Tyler McNish</h4>\n" +
    "                                <h6 class=\"text-color-primary bold primary-font spacing-bot-sm\">Director of Market Development</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">Manages SafeConnect Solar’s pilot programs with local governments.  Prior to joining SafeConnect, Tyler worked as an attorney for the solar industry in Hawaii, helping energy developers negotiate power purchase agreements for over 250 MW of cumulative renewable capacity, and participating in the Public Utilities Commission policy and regulatory proceedings affecting Hawaii’s renewable energy sector. Tyler has also worked as a consultant on international climate change issues, a business strategy analyst at a Washington, D.C. consulting firm, and a Peace Corps Volunteer in Guatemala.  Tyler holds a BA in Economics from Stanford University and a JD from the UC Berkeley School of Law.</p>  \n" +
    "                        </div>    \n" +
    "                    </div>\n" +
    "                \n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"logo-c-bkgnd\">\n" +
    "                    \n" +
    "                    <svg opacity=\"0.6\" width=\"100%\" height=\"inherit\" viewBox=\"-2 19 848 861\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n" +
    "                        <desc>LogoC Background</desc>\n" +
    "                        <defs>\n" +
    "                            <filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"filter-1\">\n" +
    "                                <feOffset dx=\"0\" dy=\"0\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n" +
    "                                <feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n" +
    "                                <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0\" type=\"matrix\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"></feColorMatrix>\n" +
    "                                <feMerge>\n" +
    "                                    <feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode>\n" +
    "                                    <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n" +
    "                                </feMerge>\n" +
    "                            </filter>\n" +
    "                        </defs>\n" +
    "                        <g id=\"Logo_C\" filter=\"url(#filter-1)\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0.000000, 21.000000)\">\n" +
    "                            <path d=\"M674.920065,686.093839 L720.791946,741.096957 C720.791946,741.096957 677.896361,776.881211 580.579882,821.800424 C483.263402,866.719636 402.172308,855.733337 402.172308,855.733337 L409.424008,781.035093 L525.958297,686.093839 L674.920065,686.093839 Z\" id=\"Logo_C1_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M381.064075,774.623434 L370.061991,855.274977 C370.061991,855.274977 310.181267,862.608726 211.782498,821.780729 C113.383728,780.952731 96.1100978,737.360254 96.1100978,737.360254 L163.631357,681.118134 L307.210346,681.118134 L381.064075,774.623434 Z\" id=\"Logo_C2_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M12.6644866,586.123167 C36.0106073,677.095606 82.3055284,714.762782 82.3055284,714.762782 L150.195913,659.759665 L176.407393,532.015283 L102.612792,438.551164 L8.11671931,438.551164 C8.11671931,438.551164 -10.6816341,495.150728 12.6644866,586.123167 Z\" id=\"Logo_C3_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M81.6246177,250.124307 C34.0367753,325.126716 14.6516708,410.247477 14.6516708,410.247477 L102.593085,410.247477 L219.127374,312.043994 L242.025686,182.901258 L194.318929,129.731578 C194.318929,129.731578 129.21246,175.121897 81.6246177,250.124307 Z\" id=\"Logo_C4_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M363.888998,29.764486 C277.071395,59.9297437 218.933852,112.727522 218.933852,112.727522 L269.27645,167.968771 L404.813525,167.968771 L527.192896,78.3505738 L536.858245,2.26292821 C536.858245,2.26292821 450.7066,-0.40077162 363.888998,29.764486 Z\" id=\"Logo_C5_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M551.969087,80.7694935 L635.031238,171.524637 L774.003329,171.524637 L843.748299,115.604801 C843.748299,115.604801 807.934186,66.1216922 712.979391,28.0778669 C618.024597,-9.96595839 562.51962,1.93169199 562.51962,1.93169199 L551.969087,80.7694935 Z\" id=\"Logo_C6_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                        </g>\n" +
    "                    </svg>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>");
}]);

angular.module("account/account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/account.tpl.html",
    "<!-- <div class=\"row\" id=\"account\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div><h1>My Account</h1></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value day-of-year\" ng-bind=\"dayOfYear\"></div>\n" +
    "                    <div class=\"stat-label\">Day of Year</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value day-of-month\" ng-bind=\"dayOfMonth\"></div>\n" +
    "                    <div class=\"stat-label\">Day of Month</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value week-of-year\" ng-bind=\"weekOfYear\"></div>\n" +
    "                    <div class=\"stat-label\">Week of Year</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value day-of-week\" ng-bind=\"dayOfWeek\"></div>\n" +
    "                    <div class=\"stat-label\">Day of Week</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value week-year\" ng-bind=\"weekYear\"></div>\n" +
    "                    <div class=\"stat-label\">Week Year</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value hour-of-day\" ng-bind=\"hourOfDay\"></div>\n" +
    "                    <div class=\"stat-label\">Hour of Day</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 special\">\n" +
    "        <div class=\"page-header\"><h1>Go Faster Everyday</h1></div>\n" +
    "        <i class=\"fa fa-dashboard super-awesome\"></i></div>\n" +
    "</div> -->\n" +
    "");
}]);

angular.module("account/checkout/checkout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/checkout/checkout.tpl.html",
    "<div role=\"main\" class=\"main shop\">\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<h2 class=\"mb-none\"><strong>Checkout</strong></h2>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<br>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-9\">\n" +
    "				<div class=\"panel-group\" id=\"accordion\">\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading active\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Shipping Address\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "						<!-- <button class=\"accordion active\">Shipping Address</button> -->\n" +
    "						<div class=\"paneling\" style='max-height: 100%;'>\n" +
    "							<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "\n" +
    "									<br>\n" +
    "									<form id=\"frmShippingAddress\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>First Name</label>\n" +
    "													<input type=\"text\" name=\"firstnameMailing\" ng-model=\"mailingAddress.name.first\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Last Name</label>\n" +
    "													<input type=\"text\" name=\"lastnameMailing\" ng-model=\"mailingAddress.name.last\"  class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Company Name</label>\n" +
    "													<input type=\"text\" name=\"companyMailing\" ng-model=\"mailingAddress.company\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 1</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine1Mailing\" ng-model=\"mailingAddress.addressLine1\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 2</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine2Mailing\" ng-model=\"mailingAddress.addressLine2\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>City </label>\n" +
    "													<input type=\"text\" name=\"cityMailing\" ng-model=\"mailingAddress.city\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>State </label>\n" +
    "													<input type=\"text\" name=\"stateMailing\" ng-model=\"mailingAddress.state\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Zip Code</label>\n" +
    "													<input type=\"text\" name=\"zipMailing\" ng-model=\"mailingAddress.zip\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Country</label>\n" +
    "													<input type=\"text\" name=\"countryMailing\" ng-model=\"mailingAddress.country\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<br>\n" +
    "\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Billing Address\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "						<div class=\"paneling\">\n" +
    "							<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "									<br>\n" +
    "									<form id=\"frmBillingAddress\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"col-md-12\">\n" +
    "												<span class=\"remember-box checkbox\">\n" +
    "													<label>\n" +
    "														<input type=\"checkbox\" ng-click=\"checkBillAddress()\" ng-Model=\"billingChecked\">Use shipping address?\n" +
    "													</label>\n" +
    "												</span>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>First Name</label>\n" +
    "													<input type=\"text\" name=\"firstnamebilling\" ng-model=\"billingAddress.name.first\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Last Name</label>\n" +
    "													<input type=\"text\" name=\"lastnamebilling\" ng-model=\"billingAddress.name.last\"  class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Company Name</label>\n" +
    "													<input type=\"text\" name=\"companybilling\" ng-model=\"billingAddress.company\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 1</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine1billing\" ng-model=\"billingAddress.addressLine1\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 2</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine2billing\" ng-model=\"billingAddress.addressLine2\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>City </label>\n" +
    "													<input type=\"text\" name=\"citybilling\" ng-model=\"billingAddress.city\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>State </label>\n" +
    "													<input type=\"text\" name=\"statebilling\" ng-model=\"billingAddress.state\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Zip Code</label>\n" +
    "													<input type=\"text\" name=\"zipbilling\" ng-model=\"billingAddress.zip\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Country</label>\n" +
    "													<input type=\"text\" name=\"countrybilling\" ng-model=\"billingAddress.country\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<br>\n" +
    "					<form stripe-form=\"stripeSubmit\" name=\"paymentinfo\">\n" +
    "						<div class=\"panel-group\" id=\"accordion\">\n" +
    "							<div class=\"panel panel-default\">\n" +
    "								<div class=\"panel-heading active\">\n" +
    "									<h4 class=\"panel-title\">\n" +
    "										<a class=\"accordion\">\n" +
    "											Payment Method\n" +
    "										</a>\n" +
    "									</h4>\n" +
    "								</div>\n" +
    "								<div class=\"paneling\">\n" +
    "									<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "										<div class=\"panel-body\">\n" +
    "											<br>\n" +
    "\n" +
    "											<div class=\"row\">\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Card number</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"number\" payments-validate=\"card\" payments-format=\"card\" payments-type-model=\"type\" ng-class=\"myForm.number.$card.type\"/>\n" +
    "													</div>\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Name on card </label>\n" +
    "														<input type=\"text\" ng-model=\"name\" class=\"form-control\">\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Expiration Date</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"expiry\" payments-validate=\"expiry\" payments-format=\"expiry\" />\n" +
    "													</div>\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">CVC</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"cvc\" payments-validate=\"cvc\" payments-format=\"cvc\" payments-type-model=\"type\"/>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<br>\n" +
    "\n" +
    "\n" +
    "							<div class=\"panel panel-default\">\n" +
    "								<div class=\"panel-heading active\">\n" +
    "									<h4 class=\"panel-title\">\n" +
    "										<a class=\"accordion\">\n" +
    "											Order Review\n" +
    "										</a>\n" +
    "									</h4>\n" +
    "								</div>\n" +
    "								<div class=\"paneling\">\n" +
    "									<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "										<div class=\"panel-body\">\n" +
    "											<table class=\"shop_table cart\">\n" +
    "												<thead>\n" +
    "													<tr>\n" +
    "														<th class=\"product-thumbnail\">\n" +
    "															&nbsp;\n" +
    "														</th>\n" +
    "														<th class=\"product-name\">\n" +
    "															Product\n" +
    "														</th>\n" +
    "														<th class=\"product-price\">\n" +
    "															Price\n" +
    "														</th>\n" +
    "														<th class=\"product-quantity\">\n" +
    "															Quantity\n" +
    "														</th>\n" +
    "														<th class=\"product-subtotal\">\n" +
    "															Total\n" +
    "														</th>\n" +
    "													</tr>\n" +
    "												</thead>\n" +
    "												<tbody>\n" +
    "\n" +
    "													<tr ng-repeat=\"item in cart\" class=\"cart_table_item\">\n" +
    "														<td class=\"product-thumbnail\">\n" +
    "															<img ng-src=\"{{item.imagePath}}\" alt=\"{{item.title}}\">\n" +
    "														</td>\n" +
    "														<td class=\"product-name\">\n" +
    "															{{item.title}}\n" +
    "														</td>\n" +
    "														<td class=\"product-price\">\n" +
    "															${{item.price}}\n" +
    "														</td>\n" +
    "														<td class=\"product-quantity\">\n" +
    "															{{item.quantity}}\n" +
    "														</td>\n" +
    "														<td class=\"product-subtotal\">\n" +
    "															${{cart.getProductPrice(item)}}\n" +
    "														</td>\n" +
    "													</tr>\n" +
    "												</tbody>\n" +
    "											</table>\n" +
    "										</div>\n" +
    "\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"actions-continue\">\n" +
    "								<input type=\"submit\" value=\"Place Order\" name=\"proceed\" class=\"btn btn-lg btn-primary mt-xl\">\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "			<div id=\"exportthis\" class=\"col-md-3\">\n" +
    "				<h4 class=\"heading-primary\">Cart Totals</h4>\n" +
    "				<table class=\"cart-totals\">\n" +
    "					<tbody>\n" +
    "						<tr class=\"cart-subtotal\">\n" +
    "							<th>\n" +
    "								<strong>Cart Subtotal</strong>\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								<strong><span class=\"amount\">${{cart.getCartPrice()}}</span></strong>\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "						<tr class=\"shipping\">\n" +
    "							<th>\n" +
    "								Shipping\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "							</td>\n" +
    "						</tr>	\n" +
    "						<tr class=\"total\">\n" +
    "							<th>\n" +
    "								<strong>Order Total</strong>\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								<strong><span class=\"amount\">${{cart.getCartPrice()}}</span></strong>\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "					</tbody>\n" +
    "				</table>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/checkout/order-summary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/checkout/order-summary.tpl.html",
    "<div class=\"main shop\">\n" +
    "<div id= \"confirmation-email\" class=\"col-md-9\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"section-title\">\n" +
    "        <h2 class=\"heading-font heading-tertiary spacing-top-md\">Thank you for your order!</h2>\n" +
    "        <br>\n" +
    "        <h4 class=\"mb-none preheading-font spacing-bot-sm\">Order Summary</h4>\n" +
    "        <br>\n" +
    "    </div>  \n" +
    "\n" +
    "\n" +
    "    <div class=\"accordion-body\" align=\"center\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            <table class=\"shop_table cart\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th class=\"product-thumbnail\">\n" +
    "                            &nbsp;\n" +
    "                        </th>\n" +
    "                        <th class=\"product-name\">\n" +
    "                            Product\n" +
    "                        </th>\n" +
    "                        <th class=\"product-price\">\n" +
    "                            Price\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                        </th>\n" +
    "                        <th class=\"product-quantity\">\n" +
    "                            Quantity\n" +
    "                        </th>\n" +
    "                        <th class=\"product-subtotal\">\n" +
    "                            Total\n" +
    "                        </th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody ng-if=\"cart.length\">\n" +
    "                    <tr class=\"cart_table_item\" ng-repeat=\"product in cart | filter: greaterThan('quantity', 0)\">\n" +
    "                        <td class=\"product-thumbnail\">\n" +
    "                            <a><img width=\"100\" height=\"100\" alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\">\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                        <td class=\"product-name\">\n" +
    "                            <a href=\"shop-product-sidebar.html\">{{product.title}}</a>\n" +
    "                        </td>\n" +
    "                        <td class=\"product-price\">\n" +
    "                            <span class=\"amount\">${{product.price}}</span>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            &nbsp;\n" +
    "                        </td>\n" +
    "                        <td class=\"product-quantity\">\n" +
    "                            <span>{{product.quantity}}</span>\n" +
    "                        </td>\n" +
    "                        <td class=\"product-subtotal\">\n" +
    "                            <span class=\"amount\">${{getProductPrice(product)}}</span>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "\n" +
    "\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "\n" +
    "            <div style=\"width:50%; float:left;\">\n" +
    "                <br>\n" +
    "                <table class=\"cart-totals\">\n" +
    "                    <tbody >\n" +
    "                        <tr class=\"cart-subtotal\">\n" +
    "                            <th>\n" +
    "                                <strong>Subtotal</strong>\n" +
    "                            </th>\n" +
    "                            <td>\n" +
    "                                <strong>${{getCartPrice()}}</strong>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr class=\"shipping\">\n" +
    "                            <th>\n" +
    "                                Shipping\n" +
    "                            </th>\n" +
    "                            <td>\n" +
    "                                Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr class=\"total\">\n" +
    "                            <th>\n" +
    "                                <strong>Order Total</strong>\n" +
    "                            </th>\n" +
    "                            <td>\n" +
    "                                <strong><span class=\"amount\">${{getCartPrice()}}</span></strong>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- \n" +
    "<div role=\"main\" class=\"main\">\n" +
    "\n" +
    "    <div class=\"\" >\n" +
    "\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"section-title\">\n" +
    "                <h1 class=\"heading-font heading-tertiary spacing-top-md spacing-bot-sm\">Thank you for your order!</h1>\n" +
    "                <br>\n" +
    "                <h1 class=\"heading-font heading-tertiary spacing-top-md spacing-bot-sm\">Order Summary</h1>\n" +
    "                <br>\n" +
    "            </div>              \n" +
    "            \n" +
    "            \n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-8\">\n" +
    "                    <legend>Order Contents</legend>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Product: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Price: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Quantity: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Subtotal: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                    </div>\n" +
    "                    <legend>Shipping and Payment</legend>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Shipping Address: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Billing Address: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Payment Method: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Shipping Speed: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <legend>Order Details</legend>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Order Number: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Order Date: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">##/##/####</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Order Status: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <legend> </legend>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">########</label>\n" +
    "                    </div>\n" +
    "                    <legend></legend>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Subtotal: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###.##</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Shipping: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">##.##</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Tax: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">##.##</label>\n" +
    "                    </div>\n" +
    "                    <legend> </legend>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Total: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###.##</label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<button ng-click=\"returnHome()\">Return Home</button> -->");
}]);

angular.module("account/purchaseHistory/purchaseHistory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/purchaseHistory/purchaseHistory.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-lg-12\">\n" +
    "        <h1>Purchase History</h1>\n" +
    "        <br>\n" +
    "        <div class=\"sidebar-search\" style=\"width: 30%;\">\n" +
    "            <div class=\"input-group custom-search-form\">\n" +
    "                <input name=\"username\" type=\"text\" class=\"form-control\" ng-model=\"filters.username\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\" placeholder=\"Search...\">\n" +
    "                <div class=\"input-group-btn\">\n" +
    "                    <button class=\"btn btn-default\" type=\"button\">\n" +
    "                        <i class=\"fa fa-search\"></i>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                Purchase History\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <table class=\"table table-striped table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Date</th>\n" +
    "                            <th>Transaction #</th>\n" +
    "                            <th>Purchase Amount</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <!-- <tr ng-repeat=\"user in users\" ng-click=\"goToUser();\"> -->\n" +
    "                        <tr ng-repeat=\"ph in phList\" class=\"odd gradeX\" ng-click=\"goToPH();\">\n" +
    "                            <!-- <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/users/{{user._id}}\">Edit</a></td> -->\n" +
    "                            <td ng-bind=\"ph.orderDate | date:'MM/dd/yyyy'\"></td>\n" +
    "                            <td ng-bind=\"ph.orderNumber\"></td>\n" +
    "                            <td ng-bind=\"ph.cost.total | currency\"></td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"phList.length === 0\">\n" +
    "                            <td colspan=\"5\">no documents matched</td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "\n" +
    "                <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "                    <div class=\"btn-group pull-left\">\n" +
    "                        <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                        <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"btn-group pull-right\">\n" +
    "                        <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                        <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/purchaseHistory/purchaseHistoryOne.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/purchaseHistory/purchaseHistoryOne.tpl.html",
    "<div id=\"admin-purchase-history-single\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div>\n" +
    "            <h1>Purchase Record</h1>\n" +
    "            <h6><big><a ng-href=\"/account/purchaseHistory\">&nbsp&nbspBack to Purchase History</a></big></h6>\n" +
    "        </div>\n" +
    "        \n" +
    "        <p style=\"padding-left: .8em\">Date: <span ng-bind=\"phDetail.orderDate | date:'MM/dd/yyyy'\"/>\n" +
    "        <br>Customer: \n" +
    "        <br>Company: </p>\n" +
    "\n" +
    "        <br>\n" +
    "        <p style=\"padding-left: .8em\">Transaction Number: {{phDetail.orderNumber}}\n" +
    "        <br>Purchase Amount: <span ng-bind=\"phDetail.cost.total | currency\"/>\n" +
    "        <br>Payment Method: </p>\n" +
    "\n" +
    "        <br>\n" +
    "\n" +
    "        <h4>Order</h4>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "                    <!-- <div class=\"panel-heading\">\n" +
    "                        Order\n" +
    "                    </div> -->\n" +
    "            <div class=\"panel-body\">\n" +
    "                    <table width=\"100%\" class=\"table\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Item</th>\n" +
    "                                <th>Unit Cost</th>\n" +
    "                                <th>Quantity</th>\n" +
    "                                <th>Total</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        \n" +
    "                        <tbody>\n" +
    "                            <tr class=\"odd gradeX\">\n" +
    "                                <td> Cable </td>\n" +
    "                                <td ng-bind=\"phDetail.cost.raw | currency\"></td>\n" +
    "                                <td> 1 </td>\n" +
    "                                <td ng-bind=\"phDetail.cost.raw | currency\"></td>\n" +
    "                            </tr>\n" +
    "                            \n" +
    "                        </tbody>\n" +
    "                        <tfoot>\n" +
    "                            <tr>\n" +
    "                                <td class=\"align-right\" colspan=\"6\">\n" +
    "                                    <p>\n" +
    "                                        Shipping cost: <span ng-bind=\"phDetail.cost.shipping | currency\"/>\n" +
    "                                    <br>\n" +
    "                                        Taxes: <span ng-bind=\"phDetail.cost.tax | currency\"/>\n" +
    "                                    <br>\n" +
    "                                        Total: <span ng-bind=\"phDetail.cost.total | currency\"/>\n" +
    "                                    </p>\n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                        </tfoot>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        <br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/settings/account-settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/settings/account-settings.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div><h1>Account Settings</h1></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-9\">\n" +
    "        <form name=\"identityForm\">\n" +
    "            <legend>Identity</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                </div>\n" +
    "                <alert ng-repeat=\"alert in alerts.identity\" type=\"{{alert.type}}\" close=\"closeAlert('identity', $index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(identityForm.username)}\">\n" +
    "                    <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"email\">Email:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(identityForm.email)}\">\n" +
    "                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-6\" style=\"float: right; width: 45%;\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"submit(identityForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "\n" +
    "        <form name=\"passwordForm\">\n" +
    "            <legend>Change Password</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                </div>\n" +
    "                <alert ng-repeat=\"alert in alerts.pass\" type=\"{{alert.type}}\" close=\"closeAlert('pass', $index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(passwordForm.password)}\">\n" +
    "                    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"pass.newPassword\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(passwordForm.password, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\" style=\"padding-right: 0px;\">\n" +
    "                    <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(passwordForm.confirm)}\">\n" +
    "                    <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"pass.confirm\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(passwordForm.confirm, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-2\" style=\"float: right; width: 45%;\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-password\" ng-disabled=\"!canSave(passwordForm)\" ng-click=\"submit(passwordForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "\n" +
    "        <form name=\"detailForm\">\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                </div>\n" +
    "                <alert ng-repeat=\"alert in alerts.detail\" type=\"{{alert.type}}\" close=\"closeAlert('detail', $index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"col-md-4 form-group\" ng-class=\"{'has-error': hasError(detailForm.first)}\">\n" +
    "                    <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"userDetail.first\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(detailForm.first, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4 form-group\" ng-class=\"{'has-error': hasError(detailForm.last)}\">\n" +
    "                    <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"userDetail.last\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(detailForm.last, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"company\">Company Name:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(detailForm.company)}\">\n" +
    "                    <input type=\"text\" name=\"company\" id=\"company\" class=\"form-control\" ng-model=\"userDetail.company\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"phone\">Phone:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(detailForm.phone)}\">\n" +
    "                    <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" ng-model=\"userDetail.phone\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-6\" style=\"float: right; width: 45%;\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"submit(detailForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "\n" +
    "        <form name=\"shipinfoForm\">\n" +
    "            <legend>Shipping Information</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-1\">\n" +
    "                    <!-- MAKE THIS NUMBER MOTHER FUCKING CHANGE WHEN THERE ARE MORE ADDRESSES -->\n" +
    "                    <span>1)</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-11\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-2\">\n" +
    "                            <label class=\"control-label\" for=\"full\">Full Name:</label>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <!--        PUT PROPER ALERT HERE\n" +
    "                    <alert ng-repeat=\"alert in alerts.detail\" type=\"{{alert.type}}\" close=\"closeAlert('detail', $index)\">{{alert.msg}}</alert>\n" +
    "                    -->\n" +
    "\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.full)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"full\" id=\"full\" class=\"form-control\" ng-model=\"userDetail.full\" required>\n" +
    "                        <span class=\"help-block\" ng-show=\"showError(shipinfoForm.full, 'required')\">This field is required</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"address\">Address Line 1: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.address)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"address\" id=\"address\" class=\"form-control\" ng-model=\"userDetail.address\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"address2\">Address Line 2: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.address)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"address2\" id=\"address2\" class=\"form-control\" ng-model=\"userDetail.address2\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"city\">City</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.city)}\">\n" +
    "                        <input type=\"text\" name=\"city\" id=\"city\" class=\"form-control\" ng-model=\"userDetail.city\">\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-1\">\n" +
    "                        <label class=\"control-label\" for=\"usstate\">State</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.usstate)}\" style=\"width: 13.5%;\">\n" +
    "                        <select name=\"usstate\" class=\"form-control\" ng-model=\"filters.usstate\" ng-change=\"filtersUpdated()\">\n" +
    "                            <option ng-repeat=\"x in usstates\">{{x}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-1\">\n" +
    "                        <label class=\"control-label\" for=\"zip\">Zip</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.zip)}\">\n" +
    "                        <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"userDetail.zip\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"form-group col-md-6\" style=\"float: right; width: 45%;\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(shipinfoForm)\" ng-click=\"submit(shipinfoForm)\">Update</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 form-group\" style=\"float: right;\">\n" +
    "\n" +
    "                    <!-- MAKE CLICKING THIS TEXT CREATE ANOTHER MOTHER FUCKING ADDRESS -->\n" +
    "\n" +
    "                    <span><a id=\"panel_view\" href ng-click=\"panelModal()\">Add Another Address</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "\n" +
    "        <form name=\"billinfoForm\">\n" +
    "            <legend>Billing Information</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-1\">\n" +
    "                    <!-- MAKE THIS NUMBER MOTHER FUCKING CHANGE WHEN THERE ARE MORE ADDRESSES -->\n" +
    "                    <span>1)</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-11\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-2\">\n" +
    "                            <label class=\"control-label\" for=\"full\">Full Name:</label>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!--        PUT PROPER ALERT HERE\n" +
    "                        <alert ng-repeat=\"alert in alerts.detail\" type=\"{{alert.type}}\" close=\"closeAlert('detail', $index)\">{{alert.msg}}</alert>\n" +
    "                    -->\n" +
    "\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.full)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"full\" id=\"full\" class=\"form-control\" ng-model=\"userDetail.full\" required>\n" +
    "                        <span class=\"help-block\" ng-show=\"showError(billinfoForm.full, 'required')\">This field is required</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"address\">Address Line 1: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.address)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"address\" id=\"address\" class=\"form-control\" ng-model=\"userDetail.address\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"address2\">Address Line 2: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.address)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"address2\" id=\"address2\" class=\"form-control\" ng-model=\"userDetail.address2\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"city\">City</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.city)}\">\n" +
    "                        <input type=\"text\" name=\"city\" id=\"city\" class=\"form-control\" ng-model=\"userDetail.city\">\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-1\">\n" +
    "                        <label class=\"control-label\" for=\"usstate\">State</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.usstate)}\" style=\"width: 13.5%;\">\n" +
    "                        <select name=\"usstate\" class=\"form-control\" ng-model=\"filters.usstate\" ng-change=\"filtersUpdated()\">\n" +
    "                            <option ng-repeat=\"x in usstates\">{{x}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-1\">\n" +
    "                        <label class=\"control-label\" for=\"zip\">Zip</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.zip)}\">\n" +
    "                        <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"userDetail.zip\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"form-group col-md-6\" style=\"float: right; width: 45%;\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(billinfoForm)\" ng-click=\"submit(billinfoForm)\">Update</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 form-group\" style=\"float: right;\">\n" +
    "\n" +
    "                    <!-- MAKE CLICKING THIS TEXT CREATE ANOTHER MOTHER FUCKING ADDRESS -->\n" +
    "\n" +
    "                    <span><a id=\"panel_view\" href ng-click=\"panelModal()\">Add Another Address</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("account/verification/account-verification.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/verification/account-verification.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"page-header\"><h1>Verification Required</h1></div>\n" +
    "        <div class=\"alert alert-warning\">Your account is nearly ready. Check your inbox for next steps.</div>\n" +
    "        <div id=\"verify\"></div>\n" +
    "        <form name=\"verificationForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"not-received\" ng-show=\"!formVisible\">\n" +
    "                <a class=\"btn btn-link btn-resend\" ng-click=\"showForm()\">I checked my email and spam folder, nothing yet.</a>\n" +
    "            </div>\n" +
    "            <div class=\"verify-form\" ng-show=\"formVisible\">\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(verificationForm.email)}\">\n" +
    "                    <label class=\"control-label\" for=\"email\">Your Email:</label>\n" +
    "                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"email\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(verificationForm.email, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(verificationForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(verificationForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary btn-verify\" ng-click=\"submit()\">Re-Send Verification</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 special\">\n" +
    "        <div class=\"page-header\"><h1>You're Almost Done</h1></div>\n" +
    "        <i class=\"fa fa-key super-awesome\"></i></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/Pricing/admin-pricing-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/Pricing/admin-pricing-modal.tpl.html",
    "<div class=\"text-right\">\n" +
    "<header class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\" id=\"modal-title\">Update Price</h3>\n" +
    "</header>\n" +
    "</div>\n" +
    "<div class=\"text-right\">\n" +
    "	<div class=\"modal-body\" id=\"modal-body\">\n" +
    "		Price: <input  type=\"number\" ng-model=\"newPrice\"  placeholder=${{placehold}}>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<footer class=\"modal-footer\">\n" +
    "	<button class=\"btn btn-primary\" ng-click=\"updatePrice()\">Update</button>\n" +
    "	<button class=\"btn btn-primary\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("admin/Pricing/admin-pricing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/Pricing/admin-pricing.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-lg-10\">\n" +
    "      <h1> Pricing</h1>\n" +
    "      <br>\n" +
    "\n" +
    "      <h2>Smart Box</h2>\n" +
    "      <div table-layout=\"fixed\" style=\"padding-left: 3em\">\n" +
    "        <table style=\"width:100%\">\n" +
    "          <tr ng-repeat=\"product in products| filter:{type:'SmartBox'}\">\n" +
    "            <td width=\"33%\">{{product.title}}</td>\n" +
    "            <td width=\"33%\">${{product.price}} ea</td>\n" +
    "            <td class=\"update-price\" style=\"cursor: pointer;\" width=\"33%\"><a ng-click=\"updateModal(product)\">Update Price</a></td>\n" +
    "            <!-- <td width=\"33%\" ng-click=\"updateModal(product)\" style=\"cursor: pointer; color: #0645AD; hover:text-decoration: underline;\"\">Update Price</td> -->\n" +
    "            <!-- <td><a ng-href=\"/admin/users/{{user._id}}\">Edit</a></td> -->\n" +
    "\n" +
    "          </tr>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "\n" +
    "      <h2>Cabling</h2>\n" +
    "      <div table-layout=\"fixed\" style=\"padding-left: 3em\">\n" +
    "        <table style=\"width:100%\">\n" +
    "          <tr ng-repeat=\"product in products| filter:{type:'Cabling'}\">\n" +
    "            <td width=\"33%\">{{product.title}}</td>\n" +
    "            <td width=\"33%\">${{product.price}} ea</td>\n" +
    "            <td class=\"update-price\" style=\"cursor: pointer;\" width=\"33%\"><a ng-click=\"updateModal(product)\">Update Price</a></td>\n" +
    "            <!-- <td width=\"33%\" ng-click=\"updateModal(product)\">Update Price</td> -->\n" +
    "\n" +
    "          </tr>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <h2>Connectors</h2>\n" +
    "      <div table-layout=\"fixed\" style=\"padding-left: 3em\">\n" +
    "        <table style=\"width:100%\">\n" +
    "          <tr ng-repeat=\"product in products| filter:{type:'Adapter'}\">\n" +
    "            <td width=\"33%\">{{product.title}}</td>\n" +
    "            <td width=\"33%\">${{product.price}} ea</td>\n" +
    "            <td class=\"update-price\" style=\"cursor: pointer;\" width=\"33%\"><a ng-click=\"updateModal(product)\">Update Price</a></td>\n" +
    "            <!-- <td width=\"33%\" ng-click=\"updateModal(product)\">Update Price</td> -->\n" +
    "\n" +
    "          </tr>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <br>\n" +
    "  <br>\n" +
    "  <br>\n" +
    "  <h2>Change History</h2>\n" +
    "\n" +
    "  <br>\n" +
    "\n" +
    "  <div>\n" +
    "    <table width=\"100%\" class=\"table\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th>Item</th>\n" +
    "          <th>Date</th>\n" +
    "          <th>New Price</th>\n" +
    "          <th>Old Price</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "\n" +
    "      <tbody>\n" +
    "\n" +
    "        <tr ng-repeat=\"product in products | orderBy:'title'\">\n" +
    "          <td>{{product.title}}</td>\n" +
    "          <td>\n" +
    "            <ul style=\"list-style: none; list-style-position:inside; margin:0; padding:0;\">\n" +
    "              <li ng-repeat=\"record in product.priceHistory\">\n" +
    "                <span>{{record.date | date:\"MM/dd/yyyy\"}}</span>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <ul style=\"list-style: none; list-style-position:inside; margin:0; padding:0;\">\n" +
    "              <li ng-repeat=\"record in product.priceHistory\">\n" +
    "                <span>${{record.newPrice}}</span>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <ul style=\"list-style: none; list-style-position:inside; margin:0; padding:0;\">\n" +
    "              <li ng-repeat=\"record in product.priceHistory\">\n" +
    "                <span>${{record.oldPrice}}</span>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "\n" +
    "\n" +
    "               <!--  <tr class=\"odd gradeX\">\n" +
    "                    <td> Date </td>\n" +
    "                    <td> Item</td>\n" +
    "                    <td> New Price </td>\n" +
    "                    <td> Old Price </td>\n" +
    "                  </tr> -->\n" +
    "\n" +
    "<!-- \n" +
    "                                \n" +
    "                                <tr ng-repeat=\"ph in phList\" ng-click=\"goToPH();\">\n" +
    "                                    \n" +
    "                                    <td>{{ph.orderDate |  date:\"MM/dd/yyyy\"}}</td>\n" +
    "                                    <td ng-bind=\"ph.company\"></td>\n" +
    "                                    <td ng-bind=\"ph.user.name\"></td>\n" +
    "                                    <td ng-bind=\"ph.user._id\"></td>\n" +
    "                                    <td></td>\n" +
    "                                    <td>${{ph.cost.total}}</td>\n" +
    "                                    <td ng-bind=\"ph.orderNumber\"></td>\n" +
    "                                </tr>\n" +
    "                                <tr ng-show=\"phList.length === 0\">\n" +
    "                                    <td colspan=\"5\">no documents matched</td>\n" +
    "                                  </tr> -->\n" +
    "\n" +
    "      </tbody>\n" +
    "\n" +
    "    </table>\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("admin/Sales/admin-sales.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/Sales/admin-sales.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div class=\"row\">   \n" +
    "        <h1>Sales</h1>\n" +
    "        <br> \n" +
    "\n" +
    "        <div id=\"stats\" class=\"container\" style=\"height: 180px;\">\n" +
    "            <div style='float:left;width:50%'>\n" +
    "                <h4>Lifetime</h4>\n" +
    "                <div style=\"padding-left: 3em\">\n" +
    "                    <p>Number of Purchases: {{tallyOverall}}</p>\n" +
    "                    <p>Total Revenue: ${{totalOverall}}</p>\n" +
    "                    <p>Average Purchase Size: ${{averageOverall | number:2}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style='float:right;width:50%'>\n" +
    "                <h4>Last 30 Days</h4>\n" +
    "                <div style=\"padding-left: 3em\">\n" +
    "                    <p>Number of Purchases: {{tally30Days}}</p>\n" +
    "                    <p>Total Revenue: ${{total30Days}}</p>\n" +
    "                    <p>Average Purchase Size: ${{average30Days | number:2}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Monthly</h4>\n" +
    "            <br>\n" +
    "            <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"totalDay\" chart-labels=\"labelDay\" chart-legend=\"true\" chart-options=\"optionsDayTotal\"\n" +
    "            chart-click=\"onClick\">></canvas>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div>\n" +
    "            <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Yearly Sales</h4>\n" +
    "            <br>\n" +
    "            <canvas class=\"chart chart-bar\" chart-options=\"optionsMonthTotal\" chart-data=\"totalMonth\" chart-labels=\"labels\" chart-colors=\"xcolors\" chart-legend=\"true\" chart-click=\"onClick\" chart-dataset-override=\"datasetOverride1\"></canvas>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div>\n" +
    "            <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Sales Size and Quantity</h4>\n" +
    "            <canvas id=\"line\" class=\"chart chart-line\" chart-legend=\"true\" chart-data=\"sizeQuantityData\"\n" +
    "            chart-labels=\"labels\" chart-series=\"series\" chart-options=\"sizeQuantityOptions\"\n" +
    "            chart-dataset-override=\"datasetOverride\" chart-click=\"onClick\"></canvas>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/accounts/admin-account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/accounts/admin-account.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a ng-href=\"/admin/accounts\">Accounts</a> / {{account.name.full}}</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\" id=\"admin-accounts-detail\">\n" +
    "    <div class=\"col-sm-8\">\n" +
    "        <form name=\"contactForm\"><fieldset>\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <alert ng-repeat=\"alert in contactAlerts\" type=\"{{alert.type}}\" close=\"closeContactAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.first)}\">\n" +
    "                <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"account.name.first\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.first, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.middle)}\">\n" +
    "                <label class=\"control-label\" for=\"middle\">Middle Name:</label>\n" +
    "                <input type=\"text\" name=\"middle\" id=\"middle\" class=\"form-control\" ng-model=\"account.name.middle\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.last)}\">\n" +
    "                <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"account.name.last\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.last, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.company)}\">\n" +
    "                <label class=\"control-label\" for=\"company\">Company Name:</label>\n" +
    "                <input type=\"text\" name=\"company\" id=\"company\" class=\"form-control\" ng-model=\"account.company\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.phone)}\">\n" +
    "                <label class=\"control-label\" for=\"phone\">Phone:</label>\n" +
    "                <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" ng-model=\"account.phone\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.zip)}\">\n" +
    "                <label class=\"control-label\" for=\"zip\">Zip:</label>\n" +
    "                <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"account.zip\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(contactForm)\" ng-click=\"updateAccount()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"loginForm\"><fieldset>\n" +
    "            <legend>Login</legend>\n" +
    "            <alert ng-repeat=\"alert in loginAlerts\" type=\"{{alert.type}}\" close=\"closeLoginAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': loginForm.newUsername && hasError(loginForm.newUsername)}\">\n" +
    "                <label class=\"control-label\">Username:</label>\n" +
    "                <!-- show this div if there is an user linked to this account -->\n" +
    "                <div class=\"input-group\" ng-show=\"account.user && account.user.name\">\n" +
    "                    <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"account.user.name\" disabled>\n" +
    "                    <div class=\"input-group-btn\" >\n" +
    "                        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkUser()\">Unlink</button>\n" +
    "                        <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/users/{{account.user.id}}\">Open</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- show this div if there isn't an user linked to this account -->\n" +
    "                <div class=\"input-group\" ng-if=\"!(account.user && account.user.name)\">\n" +
    "                    <input type=\"text\" name=\"newUsername\" placeholder=\"enter a username\" class=\"form-control\" ng-model=\"account.newUsername\" required>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(loginForm.newUsername.$dirty && loginForm.newUsername.$valid)\" ng-click=\"linkUser()\">Link</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-if=\"!(account.user && account.user.name)\" ng-show=\"showError(loginForm.newUsername, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteAccount()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <fieldset>\n" +
    "            <div class=\"status-new\">\n" +
    "                <legend>Status</legend>\n" +
    "                <alert ng-repeat=\"alert in statusAlerts\" type=\"{{alert.type}}\" close=\"closeStatusAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <select name=\"statusSelect\" class=\"form-control\" ng-model=\"selectedStatus\" ng-options=\"status.name for status in statuses track by status._id\">\n" +
    "                        <option value=\"\">-- choose --</option>\n" +
    "                    </select>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" ng-click=\"changeStatus()\">Change</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"status-items\">\n" +
    "                <div class=\"status\" ng-repeat=\"status in account.statusLog | orderBy:'-_id'\">\n" +
    "                    <div class=\"pull-right badge author\">{{status.userCreated.name}} -&nbsp;<span class=\"timeago\" ng-bind=\"formatTime(status.userCreated.time)\"></span></div>\n" +
    "                    <div ng-bind=\"status.name\"></div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "        <fieldset>\n" +
    "            <div class=\"notes-new\">\n" +
    "                <legend>Notes</legend>\n" +
    "                <alert ng-repeat=\"alert in noteAlerts\" type=\"{{alert.type}}\" close=\"closeNoteAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <textarea rows=\"3\" name=\"note\" placeholder=\"enter notes\" class=\"form-control\" ng-model=\"newNote\"></textarea>\n" +
    "                <button class=\"btn btn-default btn-block\" ng-click=\"addNote()\">Add New Note</button>\n" +
    "            </div>\n" +
    "            <div class=\"notes-items\">\n" +
    "                <div class=\"note\" ng-repeat=\"note in account.notes | orderBy: '-_id'\">\n" +
    "                    <div class=\"force-wrap\" ng-bind=\"note.data\"></div>\n" +
    "                    <div class=\"pull-right badge author\">{{note.userCreated.name}} -&nbsp;<span class=\"timeago\" ng-bind=\"formatTime(note.userCreated.time)\"></span></div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"note text-muted\" ng-show=\"account.notes.length === 0\">no notes found</div>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/accounts/admin-accounts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/accounts/admin-accounts.tpl.html",
    "<div class=\"row\" id=\"admin-accounts-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addAccountForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"fullname\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addAccountForm)\" ng-click=\"addAccount()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Accounts</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Search</label>\n" +
    "                    <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"filters.search\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Status</label>\n" +
    "                    <select name=\"status\" class=\"form-control\" ng-model=\"filters.status\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"status._id as status.name for status in statuses\" ng-change=\"filtersUpdated()\">\n" +
    "                        <option value=\"\">-- any --</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                        <!--<option value=\"company\">company &#9650;</option>-->\n" +
    "                        <!--<option value=\"-company\">company &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th>name<span class=\"pull-right\">age</span></th>\n" +
    "                <th>phone</th>\n" +
    "                <th>status</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"account in accounts\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/accounts/{{account._id}}\">Edit</a></td>\n" +
    "                <td class=\"stretch\"><span class=\"badge badge-clear pull-right\" ng-bind=\"formatTime(account.userCreated.time, 'old')\"></span>{{account.name.full}}</td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"account.phone\"></td>\n" +
    "                <td class=\"nowrap\">\n" +
    "                    <div ng-bind=\"account.status.name\"></div>\n" +
    "                    <div ng-bind=\"formatTime(account.status.userCreated.time)\"></div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"accounts.length === 0\">\n" +
    "                <td colspan=\"4\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/activity/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/activity/activity.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div ng-show=\"isSet(1)\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h1>Activity this Month</h1>\n" +
    "                <br>\n" +
    "                <div class=\"row\">\n" +
    "                    <ul class=\"nav nav-tabs\">\n" +
    "                        <li ng-class=\"{ active: isSet(1) }\">\n" +
    "                            <a href ng-click=\"setTab(1)\">Month</a>\n" +
    "                        </li>\n" +
    "                        <li ng-class=\"{ active: isSet(2) }\">\n" +
    "                            <a href ng-click=\"setTab(2)\">Year</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Past 30 Day Sales</h4>\n" +
    "                    <br>\n" +
    "                    <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"totalDay\" chart-labels=\"labelDay\" chart-options=\"optionsSalesDayTotal\" \n" +
    "                    chart-click=\"onClick\"></canvas>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Home Page Views</h4>\n" +
    "                    <br>\n" +
    "                    <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"homeView30Day\" chart-labels=\"labelDay\" chart-options=\"optionsViewsDayTotal\" \n" +
    "                    chart-click=\"onClick\"></canvas>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Cart Page Views</h4>\n" +
    "                    <br>\n" +
    "                    <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"cartView30Day\" chart-labels=\"labelDay\" chart-options=\"optionsViewsDayTotal\" \n" +
    "                    chart-click=\"onClick\"></canvas>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div ng-show=\"isSet(2)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "            <h1>Activity this Year</h1>\n" +
    "            <br>\n" +
    "            <div class=\"row\">\n" +
    "                <ul class=\"nav nav-tabs\">\n" +
    "                    <li ng-class=\"{ active: isSet(1) }\">\n" +
    "                        <a href ng-click=\"setTab(1)\">Month</a>\n" +
    "                    </li>\n" +
    "                    <li ng-class=\"{ active: isSet(2) }\">\n" +
    "                        <a href ng-click=\"setTab(2)\">Year</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Sales this Year</h4>\n" +
    "                <br>\n" +
    "                <canvas id=\"line\" class=\"chart chart-bar\" chart-type=\"bar\" chart-options=\"optionsMonthTotal\" chart-data=\"totalMonth\" chart-labels=\"labels\" \n" +
    "                chart-legend=\"true\" chart-click=\"onClick\"></canvas>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Home Page Views</h4>\n" +
    "                <br>\n" +
    "                <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"homeViewMonth\" chart-labels=\"labels\" chart-options=\"optionsMonthViews\" \n" +
    "                chart-click=\"onClick\"></canvas>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Cart Page Views</h4>\n" +
    "                <br>\n" +
    "                <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"cartViewMonth\" chart-labels=\"labels\" chart-options=\"optionsMonthViews\" \n" +
    "                chart-click=\"onClick\"></canvas>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin-account-settings/admin-account-settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin-account-settings/admin-account-settings.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div><h1>Account Settings</h1></div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"col-sm-9\">\n" +
    "        <form name=\"detailForm\">\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <alert ng-repeat=\"alert in alerts.detail\" type=\"{{alert.type}}\" close=\"closeAlert('detail', $index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.first)}\">\n" +
    "                <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"userDetail.first\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.first, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.middle)}\">\n" +
    "                <label class=\"control-label\" for=\"middle\">Middle Name:</label>\n" +
    "                <input type=\"text\" name=\"middle\" id=\"middle\" class=\"form-control\" ng-model=\"userDetail.middle\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.last)}\">\n" +
    "                <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"userDetail.last\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.last, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.company)}\">\n" +
    "                <label class=\"control-label\" for=\"company\">Company Name:</label>\n" +
    "                <input type=\"text\" name=\"company\" id=\"company\" class=\"form-control\" ng-model=\"userDetail.company\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.phone)}\">\n" +
    "                <label class=\"control-label\" for=\"phone\">Phone:</label>\n" +
    "                <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" ng-model=\"userDetail.phone\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.zip)}\">\n" +
    "                <label class=\"control-label\" for=\"zip\">Zip:</label>\n" +
    "                <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"userDetail.zip\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"submit(detailForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <form name=\"identityForm\">\n" +
    "            <legend>Identity</legend>\n" +
    "            <alert ng-repeat=\"alert in alerts.identity\" type=\"{{alert.type}}\" close=\"closeAlert('identity', $index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Email:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"submit(identityForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <form name=\"passwordForm\">\n" +
    "            <legend>Set Password</legend>\n" +
    "            <alert ng-repeat=\"alert in alerts.pass\" type=\"{{alert.type}}\" close=\"closeAlert('pass', $index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"pass.newPassword\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(passwordForm.password, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.confirm)}\">\n" +
    "                <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"pass.confirm\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(passwordForm.confirm, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-password\" ng-disabled=\"!canSave(passwordForm)\" ng-click=\"submit(passwordForm)\">Set Password</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-3\" ng-if=\"social\">\n" +
    "        <legend>Social Connections</legend>\n" +
    "        <alert ng-repeat=\"alert in socialAlerts\" type=\"{{alert.type}}\" close=\"closeSocialAlert($index)\">{{alert.msg}}</alert>\n" +
    "        <a ng-repeat-start=\"(provider, property) in social\" ng-if=\"property.connected\" ng-click=\"disconnect(provider)\" class=\"btn btn-block btn-danger\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> Disconnect {{property.text}}</a>\n" +
    "        <a ng-repeat-end target=\"_self\" href=\"{{property.connect}}\" ng-if=\"!property.connected\" class=\"btn btn-block btn-default\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> Connect {{property.text}}</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("admin/admin-groups/admin-group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin-groups/admin-group.tpl.html",
    "<div class=\"row\" id=\"admin-groups-detail\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/admin-groups\">Admin Groups</a> / {{group.name}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"detailForm\"><fieldset>\n" +
    "            <legend>Details</legend>\n" +
    "            <alert ng-repeat=\"alert in detailAlerts\" type=\"{{alert.type}}\" close=\"closeDetailAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.name)}\">\n" +
    "                <label class=\"control-label\" for=\"name\">Name:</label>\n" +
    "                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"group.name\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.name, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"update()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"permissionForm\"><fieldset>\n" +
    "            <legend>Permissions</legend>\n" +
    "            <alert ng-repeat=\"alert in permissionAlerts\" type=\"{{alert.type}}\" close=\"closePermissionAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">New Setting:</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"permission\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"newPermission\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-click=\"addPermission()\">Add</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Settings:</label>\n" +
    "                <div class=\"permissions\">\n" +
    "                    <div class=\"input-group\" ng-repeat=\"permission in group.permissions\">\n" +
    "                        <input disabled ng-model=\"permission.name\" class=\"form-control\" disabled>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: permission.permit}\" ng-click=\"togglePermission($index)\">Allow</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: !permission.permit}\" ng-click=\"togglePermission($index)\">Deny</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deletePermission($index)\"><i class=\"fa fa-trash-o fa-inverse\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"badge\" ng-show=\"group.permissions.length === 0\">no permissions defined</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveSettings()\">Save Settings</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteAdminGroup()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin-groups/admin-groups.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin-groups/admin-groups.tpl.html",
    "<div class=\"row\" id=\"admin-groups-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addGroupForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"groupname\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addGroupForm)\" ng-click=\"addGroup()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Admin Groups</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"filters.name\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"group in groups\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/admin-groups/{{group._id}}\">Edit</a></td>\n" +
    "                <td ng-bind=\"group.name\"></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"group._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"groups.length === 0\">\n" +
    "                <td colspan=\"3\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1>Dashboard</h1>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Home Page Views</h4>\n" +
    "                <br>\n" +
    "                <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"homeView30Day\" chart-labels=\"labelDay\" chart-options=\"optionsViewsDayTotal\" chart-click=\"onClick\">\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Shopping Cart Views</h4>\n" +
    "                    <br>\n" +
    "                    <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"cartView30Day\" chart-labels=\"labelDay\" chart-options=\"optionsViewsDayTotal\" chart-click=\"onClick\">\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:10px\">Recent Purchases</h4>\n" +
    "                        <br>\n" +
    "                        <div class=\"table table-striped\">\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>4 minutes ago</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>12 minutes ago</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-money fa-fw\"></i> Payment Received\n" +
    "                                <span class=\"pull-right text-muted small\"><em>27 minutes ago</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>43 minutes ago</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-money fa-fw\"></i> Payment Received\n" +
    "                                <span class=\"pull-right text-muted small\"><em>11:32 AM</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>11:13 AM</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>10:57 AM</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>9:49 AM</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-money fa-fw\"></i> Payment Received\n" +
    "                                <span class=\"pull-right text-muted small\"><em>Yesterday</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "");
}]);

angular.module("admin/administrators/admin-administrator.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/administrators/admin-administrator.tpl.html",
    "<div class=\"row\" id=\"admin-administrators-detail\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/administrators\">Administrators</a> / {{administrator.name.full}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"contactForm\"><fieldset>\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <alert ng-repeat=\"alert in contactAlerts\" type=\"{{alert.type}}\" close=\"closeContactAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.first)}\">\n" +
    "                <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"administrator.name.first\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.first, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.middle)}\">\n" +
    "                <label class=\"control-label\" for=\"middle\">Middle Name:</label>\n" +
    "                <input type=\"text\" name=\"middle\" id=\"middle\" class=\"form-control\" ng-model=\"administrator.name.middle\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.last)}\">\n" +
    "                <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"administrator.name.last\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.last, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(contactForm)\" ng-click=\"updateAdmin()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"loginForm\"><fieldset>\n" +
    "            <legend>Login</legend>\n" +
    "            <alert ng-repeat=\"alert in loginAlerts\" type=\"{{alert.type}}\" close=\"closeLoginAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': loginForm.newUsername && hasError(loginForm.newUsername)}\">\n" +
    "                <label class=\"control-label\">Username:</label>\n" +
    "                <!-- show this div if there is an user linked to this administrator -->\n" +
    "                <div class=\"input-group\" ng-show=\"administrator.user && administrator.user.name\">\n" +
    "                    <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"administrator.user.name\" disabled>\n" +
    "                    <div class=\"input-group-btn\" >\n" +
    "                        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkUser()\">Unlink</button>\n" +
    "                        <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/users/{{administrator.user.id}}\">Open</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- show this div if there isn't an user linked to this administrator -->\n" +
    "                <div class=\"input-group\" ng-if=\"!(administrator.user && administrator.user.name)\">\n" +
    "                    <input type=\"text\" name=\"newUsername\" placeholder=\"enter a username\" class=\"form-control\" ng-model=\"administrator.newUsername\" required>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(loginForm.newUsername.$dirty && loginForm.newUsername.$valid)\" ng-click=\"linkUser()\">Link</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-if=\"!(administrator.user && administrator.user.name)\" ng-show=\"showError(loginForm.newUsername, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"groupForm\"><fieldset>\n" +
    "            <legend>Groups</legend>\n" +
    "            <alert ng-repeat=\"alert in groupAlerts\" type=\"{{alert.type}}\" close=\"closeGroupAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Add Membership:</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <select name=\"newMembership\" class=\"form-control\" ng-options=\"group as group.name for group in groups\" ng-model=\"selectedNewGroup\"></select>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-click=\"addGroup()\">Add</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Memberships:</label>\n" +
    "                <div class=\"groups\">\n" +
    "                    <div class=\"input-group\" ng-repeat=\"group in administrator.groups\">\n" +
    "                        <input disabled class=\"form-control\" ng-model=\"group.name\">\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteGroup($index)\"><i class=\"fa fa-trash-o fa-inverse\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"badge\" ng-show=\"administrator.groups.length === 0\">no memberships defined</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveGroups()\">Save Groups</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"permissionForm\"><fieldset>\n" +
    "            <legend>Permissions</legend>\n" +
    "            <alert ng-repeat=\"alert in permissionAlerts\" type=\"{{alert.type}}\" close=\"closePermissionAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">New Setting:</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"permission\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"newPermission\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-click=\"addPermission()\">Add</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Settings:</label>\n" +
    "                <div class=\"permissions\">\n" +
    "                    <div class=\"input-group\" ng-repeat=\"permission in administrator.permissions\">\n" +
    "                        <input disabled ng-model=\"permission.name\" class=\"form-control\" disabled>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: permission.permit}\" ng-click=\"togglePermission($index)\">Allow</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: !permission.permit}\" ng-click=\"togglePermission($index)\">Deny</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deletePermission($index)\"><i class=\"fa fa-trash-o fa-inverse\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"badge\" ng-show=\"administrator.permissions.length === 0\">no permissions defined</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveSettings()\">Save Settings</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteAdministrator()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("admin/administrators/admin-administrators.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/administrators/admin-administrators.tpl.html",
    "<div class=\"row\" id=\"admin-administrators-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addAdminForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"fullname\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addAdminForm)\" ng-click=\"addAdmin()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Administrators</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"filters.search\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"administrator in administrators\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/administrators/{{administrator._id}}\">Edit</a></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"administrator.name.full\"></td>\n" +
    "                <td ng-bind=\"administrator._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"administrators.length === 0\">\n" +
    "                <td colspan=\"3\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/developers/developers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/developers/developers.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1>API/Developers</h1>\n" +
    "            <p style=\"padding-left: 1.8em\">Number of Developers: 8</p>\n" +
    "            <div>\n" +
    "                <p class=\"pull-right\" style=\"padding-right: 3.8em\">API Calls Last Month: 18<br>API Calls Last Year: 180</p>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4>30 Day API Calculations</h4>\n" +
    "                <br>\n" +
    "                <div\n" +
    "                    area-chart\n" +
    "                    area-data='[\n" +
    "                    { y: \"2006\", a: 100},\n" +
    "                    { y: \"2007\", a: 75},\n" +
    "                    { y: \"2008\", a: 50},\n" +
    "                    { y: \"2009\", a: 75},\n" +
    "                    { y: \"2010\", a: 50},\n" +
    "                    { y: \"2011\", a: 75},\n" +
    "                    { y: \"2012\", a: 100}\n" +
    "                    ]'\n" +
    "                    area-xkey='y'\n" +
    "                    area-ykeys='[\"a\"]'\n" +
    "                    area-labels='[\"Month\"]'\n" +
    "                    line-colors='[\"#89b4f9\"]'>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4>12 Month API Calls</h4>\n" +
    "                <br>\n" +
    "                <div bar-chart bar-data='[\n" +
    "                    { y: \"2009\", a: 75,  b: 65 },\n" +
    "                    { y: \"2010\", a: 50,  b: 40 },\n" +
    "                    { y: \"2011\", a: 75,  b: 65 },\n" +
    "                    { y: \"2012\", a: 100, b: 90 }\n" +
    "                    ]' bar-x='y' bar-y='[\"a\", \"b\"]' bar-labels='[\"Year\", \"Month\"]' bar-colors='[\"#89b4f9\", \"#5f7dae\"]'>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <div class=\"table-responsive\">\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>ID</th>\n" +
    "                    <th>Name</th>\n" +
    "                    <th>Company</th>\n" +
    "                    <th>Number of API Calls</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td>12</td>\n" +
    "                    <td>Website</td>\n" +
    "                    <td>Company One</td>\n" +
    "                    <td>22</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>23</td>\n" +
    "                    <td>Website</td>\n" +
    "                    <td>Company One</td>\n" +
    "                    <td>12</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>31</td>\n" +
    "                    <td>Website</td>\n" +
    "                    <td>Company Two</td>\n" +
    "                    <td>5</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/purchase-history/admin-purchase-histories.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/purchase-history/admin-purchase-histories.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 class=\"spacing-bot-lg\">Purchase History</h1>\n" +
    "            <br>\n" +
    "            <div class=\"sidebar-search spacing-bot-lg\" style=\"width: 30%; float:right;\">\n" +
    "                <div class=\"input-group custom-search-form\">\n" +
    "                    <input name=\"orderNumber\" type=\"text\" class=\"form-control\" ng-model=\"filters.orderNumber\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\" placeholder=\"Search\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" type=\"button\">\n" +
    "                            <i class=\"fa fa-search\"></i>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "            <br>\n" +
    "                <table class=\"table table-striped\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Date</th>\n" +
    "                            <th>Company</th>\n" +
    "                            <th>Customer</th>\n" +
    "                            <th>Customer ID</th>\n" +
    "                            <th>Shipping State</th>\n" +
    "                            <th>Purchase Amount</th>\n" +
    "                            <th>Transaction ID</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <!-- <tr ng-repeat=\"user in users\" ng-click=\"goToUser();\"> -->\n" +
    "                        <tr ng-repeat=\"ph in phList\" ng-click=\"goToPH();\">\n" +
    "                            <!-- <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/users/{{user._id}}\">Edit</a></td> -->\n" +
    "                            <td>{{ph.orderDate | date:\"MM/dd/yyyy\"}}</td>\n" +
    "                            <td ng-bind=\"ph.company\"></td>\n" +
    "                            <td ng-bind=\"ph.user.name\"></td>\n" +
    "                            <td ng-bind=\"ph.user._id\"></td>\n" +
    "                            <td></td>\n" +
    "                            <td>${{ph.cost.total}}</td>\n" +
    "                            <td ng-bind=\"ph.orderNumber\"></td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"phList.length === 0\">\n" +
    "                            <td colspan=\"5\">no documents matched</td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "                <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "                    <div class=\"btn-group pull-left\">\n" +
    "                        <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                        <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"btn-group pull-right\">\n" +
    "                        <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                        <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/purchase-history/admin-purchase-histories2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/purchase-history/admin-purchase-histories2.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "   \n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 >Purchase History</h1>\n" +
    "            <br>\n" +
    "             <div class=\"sidebar-search\" style=\"width: 30%;\">\n" +
    "                <div class=\"input-group custom-search-form\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" type=\"button\">\n" +
    "                            <i class=\"fa fa-search\"></i>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            \n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    Purchase History\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <table width=\"100%\" class=\"table table-striped table-hover\" id=\"dataTables-example\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Date</th>\n" +
    "                                <th>Customer</th>\n" +
    "                                <th>Company</th>\n" +
    "                                <th>Purchase Amount</th>\n" +
    "                                <th>Transaction #</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr class=\"odd gradeX\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 4.0</td>\n" +
    "                                <td>Win 95+</td>\n" +
    "                                <td class=\"center\">4</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"even gradeC\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 5.0</td>\n" +
    "                                <td>Win 95+</td>\n" +
    "                                <td class=\"center\">5</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"odd gradeA\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 5.5</td>\n" +
    "                                <td>Win 95+</td>\n" +
    "                                <td class=\"center\">5.5</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"even gradeA\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 6</td>\n" +
    "                                <td>Win 98+</td>\n" +
    "                                <td class=\"center\">6</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"odd gradeA\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 7</td>\n" +
    "                                <td>Win XP SP2+</td>\n" +
    "                                <td class=\"center\">7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"even gradeA\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>AOL browser (AOL desktop)</td>\n" +
    "                                <td>Win XP</td>\n" +
    "                                <td class=\"center\">6</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Firefox 1.0</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Firefox 1.5</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Firefox 2.0</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Firefox 3.0</td>\n" +
    "                                <td>Win 2k+ / OSX.3+</td>\n" +
    "                                <td class=\"center\">1.9</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Camino 1.0</td>\n" +
    "                                <td>OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Camino 1.5</td>\n" +
    "                                <td>OSX.3+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Netscape 7.2</td>\n" +
    "                                <td>Win 95+ / Mac OS 8.6-9.2</td>\n" +
    "                                <td class=\"center\">1.7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Netscape Browser 8</td>\n" +
    "                                <td>Win 98SE+</td>\n" +
    "                                <td class=\"center\">1.7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Netscape Navigator 9</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.0</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.1</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.1</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.2</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.2</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.3</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.3</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.4</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.4</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.5</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.5</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.6</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.6</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.7</td>\n" +
    "                                <td>Win 98+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.8</td>\n" +
    "                                <td>Win 98+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Seamonkey 1.1</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Epiphany 2.20</td>\n" +
    "                                <td>Gnome</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>Safari 1.2</td>\n" +
    "                                <td>OSX.3</td>\n" +
    "                                <td class=\"center\">125.5</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>Safari 1.3</td>\n" +
    "                                <td>OSX.3</td>\n" +
    "                                <td class=\"center\">312.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>Safari 2.0</td>\n" +
    "                                <td>OSX.4+</td>\n" +
    "                                <td class=\"center\">419.3</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>Safari 3.0</td>\n" +
    "                                <td>OSX.4+</td>\n" +
    "                                <td class=\"center\">522.1</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>OmniWeb 5.5</td>\n" +
    "                                <td>OSX.4+</td>\n" +
    "                                <td class=\"center\">420</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>iPod Touch / iPhone</td>\n" +
    "                                <td>iPod</td>\n" +
    "                                <td class=\"center\">420.1</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>S60</td>\n" +
    "                                <td>S60</td>\n" +
    "                                <td class=\"center\">413</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 7.0</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 7.5</td>\n" +
    "                                <td>Win 95+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 8.0</td>\n" +
    "                                <td>Win 95+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 8.5</td>\n" +
    "                                <td>Win 95+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 9.0</td>\n" +
    "                                <td>Win 95+ / OSX.3+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 9.2</td>\n" +
    "                                <td>Win 88+ / OSX.3+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 9.5</td>\n" +
    "                                <td>Win 88+ / OSX.3+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera for Wii</td>\n" +
    "                                <td>Wii</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Nokia N800</td>\n" +
    "                                <td>N800</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Nintendo DS browser</td>\n" +
    "                                <td>Nintendo DS</td>\n" +
    "                                <td class=\"center\">8.5</td>\n" +
    "                                <td class=\"center\">C/A<sup>1</sup>\n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>KHTML</td>\n" +
    "                                <td>Konqureror 3.1</td>\n" +
    "                                <td>KDE 3.1</td>\n" +
    "                                <td class=\"center\">3.1</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>KHTML</td>\n" +
    "                                <td>Konqureror 3.3</td>\n" +
    "                                <td>KDE 3.3</td>\n" +
    "                                <td class=\"center\">3.3</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>KHTML</td>\n" +
    "                                <td>Konqureror 3.5</td>\n" +
    "                                <td>KDE 3.5</td>\n" +
    "                                <td class=\"center\">3.5</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeX\">\n" +
    "                                <td>Tasman</td>\n" +
    "                                <td>Internet Explorer 4.5</td>\n" +
    "                                <td>Mac OS 8-9</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>Tasman</td>\n" +
    "                                <td>Internet Explorer 5.1</td>\n" +
    "                                <td>Mac OS 7.6-9</td>\n" +
    "                                <td class=\"center\">1</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>Tasman</td>\n" +
    "                                <td>Internet Explorer 5.2</td>\n" +
    "                                <td>Mac OS 8-X</td>\n" +
    "                                <td class=\"center\">1</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>NetFront 3.1</td>\n" +
    "                                <td>Embedded devices</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>NetFront 3.4</td>\n" +
    "                                <td>Embedded devices</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeX\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>Dillo 0.8</td>\n" +
    "                                <td>Embedded devices</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeX\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>Links</td>\n" +
    "                                <td>Text only</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeX\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>Lynx</td>\n" +
    "                                <td>Text only</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>IE Mobile</td>\n" +
    "                                <td>Windows Mobile 6</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>PSP browser</td>\n" +
    "                                <td>PSP</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeU\">\n" +
    "                                <td>Other browsers</td>\n" +
    "                                <td>All others</td>\n" +
    "                                <td>-</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">U</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/purchase-history/admin-purchase-history.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/purchase-history/admin-purchase-history.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "<div id=\"admin-purchase-history-single\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div>\n" +
    "            <!-- <h1><a ng-href=\"/admin/purchase-history\">Purchase Record</a> / {{phDetail.orderNumber}}</h1> -->\n" +
    "            <h1>Purchase Record</h1>\n" +
    "        </div>\n" +
    "        \n" +
    "        <p style=\"padding-left: .8em\">Date: <span ng-bind=\"phDetail.orderDate | date:'MM/dd/yyyy'\"/>\n" +
    "        <br>Customer: <span ng-bind=\"phDetail.user.name\"/>\n" +
    "        <br>Company: <span ng-bind=\"phDetail.company\"/></p>\n" +
    "\n" +
    "        <br>\n" +
    "        <p style=\"padding-left: .8em\">Transaction Number: {{phDetail.orderNumber}}\n" +
    "        <br>Purchase Amount: <span ng-bind=\"phDetail.cost.total | currency\"/>\n" +
    "        <br>Payment Method: <span ng-bind=\"phDetail.paymentMethod\"/></p>\n" +
    "\n" +
    "\n" +
    "        <br>\n" +
    "\n" +
    "        <h4>Order</h4>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "                    <!-- <div class=\"panel-heading\">\n" +
    "                        Order\n" +
    "                    </div> -->\n" +
    "            <div class=\"panel-body\">\n" +
    "                    <table width=\"100%\" class=\"table\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Item</th>\n" +
    "                                <th>Unit Cost</th>\n" +
    "                                <th>Quantity</th>\n" +
    "                                <th>Total</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        \n" +
    "                        <tbody>\n" +
    "                            <tr class=\"odd gradeX\">\n" +
    "                                <td> Cable </td>\n" +
    "                                <td ng-bind=\"phDetail.cost.raw | currency\"></td>\n" +
    "                                <td> 1 </td>\n" +
    "                                <td ng-bind=\"phDetail.cost.raw | currency\"></td>\n" +
    "                            </tr>\n" +
    "                            \n" +
    "                        </tbody>\n" +
    "                        <tfoot>\n" +
    "                            <tr>\n" +
    "                                <td class=\"align-right\" colspan=\"6\">\n" +
    "                                    <p>\n" +
    "                                        Shipping cost: <span ng-bind=\"phDetail.cost.shipping | currency\"/>\n" +
    "                                    <br>\n" +
    "                                        Taxes: <span ng-bind=\"phDetail.cost.tax | currency\"/>\n" +
    "                                    <br>\n" +
    "                                        Total: <span ng-bind=\"phDetail.cost.total | currency\"/>\n" +
    "                                    </p>\n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                        </tfoot>\n" +
    "                    </table>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        <br>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <!-- <form name=\"identityForm\"><fieldset>\n" +
    "            <legend>Details</legend>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\" for=\"orderNumber\">Order Number:</label>\n" +
    "                <input type=\"text\" name=\"orderNumber\" id=\"orderNumber\" class=\"form-control\" ng-model=\"phDetail.orderNumber\" required server-error>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\" for=\"orderDate\">Order Date:</label>\n" +
    "                <input type=\"text\" name=\"orderDate\" id=\"orderDate\" class=\"form-control\" ng-model=\"phDetail.orderDate\" required server-error>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\" for=\"cost\">Cost:</label>\n" +
    "                <input type=\"text\" name=\"cost\" id=\"cost\" class=\"form-control\" ng-model=\"phDetail.cost.total\" required server-error>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"updateIdentity()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form> -->\n" +
    "\n" +
    "        <!-- <form name=\"deleteForm\"><fieldset>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteUser()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form> -->\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("admin/statuses/admin-status.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/statuses/admin-status.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/statuses\">Statuses</a> / {{status.name}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"detailForm\"><fieldset>\n" +
    "            <legend>Details</legend>\n" +
    "            <alert ng-repeat=\"alert in detailAlerts\" type=\"{{alert.type}}\" close=\"closeDetailAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.pivot)}\">\n" +
    "                <label class=\"control-label\" for=\"pivot\">pivot:</label>\n" +
    "                <input type=\"text\" name=\"pivot\" id=\"pivot\" class=\"form-control\" ng-model=\"status.pivot\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.pivot, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.name)}\">\n" +
    "                <label class=\"control-label\" for=\"name\">Name:</label>\n" +
    "                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"status.name\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.name, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"update()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>&nbsp;<span class=\"text-muted\">You may also create orphaned document relationships too.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteStatus()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/statuses/admin-statuses.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/statuses/admin-statuses.tpl.html",
    "<div class=\"row\" id=\"admin-statuses-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addStatusForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"pivot\" type=\"text\" placeholder=\"pivot\" class=\"form-control\" ng-model=\"add.pivot\" required>\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"name\" class=\"form-control\" ng-model=\"add.name\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addStatusForm)\" ng-click=\"addStatus()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Statuses</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Pivot Search</label>\n" +
    "                    <input name=\"pivot\" type=\"text\" class=\"form-control\" ng-model=\"filters.pivot\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"name\" type=\"text\" class=\"form-control\" ng-model=\"filters.name\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th>pivot</th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"status in statuses\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/statuses/{{status._id}}\">Edit</a></td>\n" +
    "                <td ng-bind=\"status.pivot\"></td>\n" +
    "                <td ng-bind=\"status.name\"></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"status._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"statuses.length === 0\">\n" +
    "                <td colspan=\"4\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/users/admin-user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/users/admin-user.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div class=\"row\" id=\"admin-users-detail\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div>\n" +
    "                <h1><a ng-href=\"/admin/users\">Users</a> / {{user.username}}</h1>\n" +
    "            </div>\n" +
    "            <form name=\"identityForm\"><fieldset>\n" +
    "                <legend>Identity</legend>\n" +
    "                <alert ng-repeat=\"alert in identityAlerts\" type=\"{{alert.type}}\" close=\"closeIdentityAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.isActive)}\">\n" +
    "                    <label class=\"control-label\" for=\"isActive\">Is Active:</label>\n" +
    "                    <select name=\"isActive\" id=\"isActive\" class=\"form-control\" ng-model=\"user.isActive\" ng-options=\"active for active in isActives\" server-error></select>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.isActive, 'server')\">{{errfor.isActive}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.username)}\">\n" +
    "                    <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                    <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.email)}\">\n" +
    "                    <label class=\"control-label\" for=\"email\">Email:</label>\n" +
    "                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"updateIdentity()\">Update</button>\n" +
    "                </div>\n" +
    "            </fieldset></form>\n" +
    "            <form name=\"roleForm\"><fieldset>\n" +
    "                <legend>Roles</legend>\n" +
    "                <alert ng-repeat=\"alert in roleAlerts\" type=\"{{alert.type}}\" close=\"closeRoleAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': roleForm.newAdminId && hasError(roleForm.newAdminId)}\">\n" +
    "                    <label class=\"control-label\">Admin:</label>\n" +
    "                    <!-- show this div if there is an admin linked to this user -->\n" +
    "                    <div class=\"input-group\" ng-show=\"user.roles && user.roles.admin\">\n" +
    "                        <input type=\"text\" name=\"adminId\" class=\"form-control\" ng-model=\"user.roles.admin.name.full\" disabled>\n" +
    "                        <div class=\"input-group-btn\" >\n" +
    "                            <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkAdmin()\">Unlink</button>\n" +
    "                            <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/administrators/{{user.roles.admin._id}}\">Open</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!-- show this div if there isn't an admin linked to this user -->\n" +
    "                    <div class=\"input-group\" ng-if=\"!(user.roles && user.roles.admin)\">\n" +
    "                        <input type=\"text\" name=\"newAdminId\" placeholder=\"enter admin id\" class=\"form-control\" ng-model=\"role.newAdminId\" required>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(roleForm.newAdminId.$dirty && roleForm.newAdminId.$valid)\" ng-click=\"linkAdmin()\">Link</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"help-block\" ng-if=\"!(user.roles && user.roles.admin)\" ng-show=\"showError(roleForm.newAdminId, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': roleForm.newAccountId && hasError(roleForm.newAccountId)}\">\n" +
    "                    <label class=\"control-label\">Account:</label>\n" +
    "                    <!-- show this div if there is an account linked to this user -->\n" +
    "                    <div class=\"input-group\" ng-show=\"user.roles && user.roles.account\">\n" +
    "                        <input type=\"text\" name=\"accountId\" class=\"form-control\" ng-model=\"user.roles.account.name.full\" disabled>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkAccount()\">Unlink</button>\n" +
    "                            <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/accounts/{{user.roles.account._id}}\">Open</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!-- show this div if there isn't an account linked to this user -->\n" +
    "                    <div class=\"input-group\" ng-if=\"!(user.roles && user.roles.account)\">\n" +
    "                        <input type=\"text\" name=\"newAccountId\" placeholder=\"enter account id\" class=\"form-control\" ng-model=\"role.newAccountId\" required>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(roleForm.newAccountId.$dirty && roleForm.newAccountId.$valid)\" ng-click=\"linkAccount()\">Link</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"help-block\" ng-if=\"!(user.roles && user.roles.account)\" ng-show=\"showError(roleForm.newAccountId, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "            </fieldset></form>\n" +
    "            <form name=\"passwordForm\"><fieldset>\n" +
    "                <legend>Set Password</legend>\n" +
    "                <alert ng-repeat=\"alert in passwordAlerts\" type=\"{{alert.type}}\" close=\"closePasswordAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.password)}\">\n" +
    "                    <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"pass.newPassword\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(passwordForm.password, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.confirm)}\">\n" +
    "                    <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                    <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"pass.confirm\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(passwordForm.confirm, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(passwordForm)\" ng-click=\"setPassword()\">Set Password</button>\n" +
    "                </div>\n" +
    "            </fieldset></form>\n" +
    "            <form name=\"deleteForm\"><fieldset>\n" +
    "                <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <span class=\"help-block\">\n" +
    "                        <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteUser()\">Delete</button>\n" +
    "                </div>\n" +
    "            </fieldset></form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("admin/users/admin-users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/users/admin-users.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div id=\"admin-users-index\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h1>Customer Information</h1>\n" +
    "                <br>\n" +
    "                <p style=\"padding-left:15px\">Number of Customer Accounts: {{numberOfCustomers}}</p>\n" +
    "                <div class=\"sidebar-search\" style=\"width: 30%;float:right\">\n" +
    "                    <div class=\"input-group custom-search-form\">\n" +
    "                        <input name=\"username\" type=\"text\" class=\"form-control\" ng-model=\"filters.username\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\" placeholder=\"Search...\">\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button class=\"btn btn-default\" type=\"button\">\n" +
    "                                <i class=\"fa fa-search\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4>User Information</h4>\n" +
    "                    <br>\n" +
    "                    <table class=\"table table-striped\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Username</th>\n" +
    "                                <th>Name</th>\n" +
    "                                <th>Company</th>\n" +
    "                                <th>Number of Purchases</th>\n" +
    "                                <th>Total Purchase Amount</th>\n" +
    "                                \n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <!-- <tr ng-repeat=\"account in accounts\" ng-click=\"goToAccount();\"> -->\n" +
    "                            <tr ng-repeat=\"account in accounts\" ng-click=\"accountPurchases();\">\n" +
    "                                <td ng-bind=\"account.user.name\"></td>\n" +
    "                                <td ng-bind=\"account.name.full\"></td>\n" +
    "                                <td ng-bind=\"account.company\"></td>\n" +
    "                                <td class=\"stretch\" ng-bind=\"account.purchaseHistoryLog.length\"></td>\n" +
    "                                <td ng-bind=\"account.purchaseAmount\"></td>\n" +
    "                            </tr>\n" +
    "                            <tr ng-show=\"users.length === 0\">\n" +
    "                                <td colspan=\"5\">no documents matched</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                    <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "                        <div class=\"btn-group pull-left\">\n" +
    "                            <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                            <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"btn-group pull-right\">\n" +
    "                            <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                            <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"clearfix\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact.tpl.html",
    "<div role=\"main\" class=\"main\">\n" +
    "\n" +
    "    <div class=\"container\"><div class=\"row\"></div></div>\n" +
    "\n" +
    "    <ng-map style=\"width:100%; height: 55%; position: absolute; background-color: rgb(229, 227, 223); left: 0px; top: 0px; overflow: hidden; z-index: 0;\" zoom=\"15\" center=\"[21.309063, -157.860265]\">\n" +
    "        <marker position=\"1003 Bishop St Suite 2020, Honolulu, HI 96813\"\n" +
    "        title=\"Pauahi Tower Office\"\n" +
    "        centered=\"true\"></marker>\n" +
    "    </ng-map>\n" +
    "\n" +
    "    <div class=\"container\"><div class=\"row\"></div></div>\n" +
    "\n" +
    "    <div class=\"container\" style=\"margin-top: 30%;\">\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "\n" +
    "                <h2 class=\"mb-sm mt-sm\"><strong>Contact</strong> Us</h2>\n" +
    "                \n" +
    "                <form name=\"msgForm\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(msgForm.name)}\">\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <label class=\"control-label\" for=\"name\">Your name *</label>\n" +
    "                                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"msg.name\" required>\n" +
    "                                <span class=\"help-block\" ng-show=\"showError(msgForm.name, 'required')\">Please enter your name.</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(msgForm.email)}\">\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <label class=\"control-label\" for=\"email\">Your email address *</label>\n" +
    "                                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"msg.email\" required>\n" +
    "                                <span class=\"help-block\" ng-show=\"showError(msgForm.email, 'required')\">Email address is required.</span>\n" +
    "                                <span class=\"help-block\" ng-show=\"showError(msgForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(msgForm.message)}\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <label class=\"control-label\" for=\"message\">Message *</label>\n" +
    "                                <textarea name=\"message\" id=\"message\" rows=\"5\" class=\"form-control\" ng-model=\"msg.message\" required></textarea>\n" +
    "                                <span class=\"help-block\" ng-show=\"showError(msgForm.message, 'required')\">Please enter your message.</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <button type=\"button\" class=\"btn btn-primary btn-contact\" ng-disabled=\"!canSave(msgForm)\" ng-click=\"submit()\">Send Message</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div> \n" +
    "\n" +
    "            <div class=\"col-md-5 col-md-offset-1\">\n" +
    "\n" +
    "                <h4 class=\"heading-primary mt-lg\">Get in <strong>Touch</strong></h4>\n" +
    "                <p>Thank you for your interest in SafeConnect Solar! If you would like to contact us, either use the contact form or send us an email at <a href=\"mailto:info@safeconnectsolar.com\">info@safeconnectsolar.com</a>. </p>\n" +
    "\n" +
    "                <hr>\n" +
    "\n" +
    "                <ul class=\"list list-icons list-icons-style-3 mt-xlg\">\n" +
    "                    <li><i class=\"fa fa-envelope\"></i> <strong>Email:</strong> <a href=\"mailto:info@safeconnectsolar.com\">info@safeconnectsolar.com</a></li>\n" +
    "                    <li><i class=\"fa fa-map-marker\"></i> <strong>Address:</strong> 1003 Bishop Street, Suite 2020, Honolulu, HI 96813, United States</li>\n" +
    "                    \n" +
    "                </ul>\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer.tpl.html",
    "<div ng-controller=\"FooterCtrl\">\n" +
    "	<footer id=\"footer\" class=\"light\">\n" +
    "	    \n" +
    "		<div class=\"footer-copyright\">\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"row\">\n" +
    "	                <div class=\"col-xs-5\">\n" +
    "	                    <span>© Copyright 2016. All Rights Reserved.</span>\n" +
    "	                </div>\n" +
    "	                \n" +
    "					<div class=\"col-xs-7 col-xs-offset-0 text-right\">\n" +
    "						<a href=\"/\" class=\"logo footer-logo\">\n" +
    "							<img alt=\"Porto Website Template\" class=\"img-responsive\" src=\"img/sc_logo.png\">\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</footer>\n" +
    "</div>");
}]);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div ng-controller=\"HeaderCtrl\">\n" +
    "    <header hl-sticky=\"\">\n" +
    "    <div id=\"header\" class=\"header-narrow\" ng-if=\"!isAdmin()\">\n" +
    "        <div class=\"header-body\"  style=\"color:#ffffff\">\n" +
    "            <div class=\"header-container container\">\n" +
    "                <div class=\"header-row\">\n" +
    "                    <div class=\"header-column\">\n" +
    "                        <div class=\"header-logo\">\n" +
    "                            <a href=\"/\">\n" +
    "                                <img alt=\"SafeConnect Solar\" width=\"\" height=\"40\" src=\"img/sc_logo.png\">\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-column\">\n" +
    "                        <div class=\"header-row\">\n" +
    "                            <div class=\"header-nav header-nav-top-line\">\n" +
    "                                <button class=\"btn header-btn-collapse-nav\" ng-init=\"menuCollapsed = true\" ng-click=\"menuCollapsed = !menuCollapsed\">\n" +
    "                                    <i class=\"fa fa-bars\"></i>\n" +
    "                                </button>\n" +
    "\n" +
    "                                <div class=\"header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1 collapse\" collapse=\"menuCollapsed\" ng-click=\"menuCollapsed = true\">\n" +
    "                                    <nav>\n" +
    "                                        <ul class=\"nav nav-pills\" id=\"mainNav\">\n" +
    "                                            <li ng-class=\"{active: isActive('/')}\"><a href=\"/\">Home</a></li>\n" +
    "                                            <li ng-class=\"{active: isActive('/specs')}\"><a href=\"/specs\">Product Details</a></li>\n" +
    "                                            <li class=\"dropdown\">\n" +
    "                                                <a href=\"/pricing/information\" class=\"dropdown-toggle\">Pricing / Purchase</a>\n" +
    "                                                <ul class=\"dropdown-menu\">\n" +
    "                                                    <li ><a href=\"/pricing/information\">What Do I Need For My Installation?</a></li>\n" +
    "                                                    <li><a href=\"/pricing\">Pricing/Purchasing</a></li>\n" +
    "                                                </ul>\n" +
    "                                            </li>\n" +
    "                                            <li ng-class=\"{active: isActive('/about')}\"><a href=\"/about\">About Us</a></li>\n" +
    "                                            <li ng-class=\"{active: isActive('/contact')}\"><a href=\"/contact\">Contact</a></li>\n" +
    "                                            <li ng-if=\"isAuthenticated()\" class=\"dropdown\">\n" +
    "                                                <a href=\"/account/settings\" class=\"dropdown-toggle\">My Account</a>\n" +
    "                                                <ul href=\"/account/purchaseHistory\" ng-if=\"isAuthenticated()\" class=\"dropdown-menu\">\n" +
    "                                                    <li ng-if=\"isAuthenticated()\" ><a href=\"/account/purchaseHistory\">Purchase History</a></li>\n" +
    "                                                    <li ng-if=\"isAuthenticated()\" ><a href=\"/account/settings\">Settings</a></li>\n" +
    "                                                    <li ng-if=\"isAuthenticated()\"><a href=\"\" ng-click=\"logout()\">Sign Out</a></li>\n" +
    "                                                </ul>\n" +
    "                                            </li>\n" +
    "\n" +
    "                                            \n" +
    "                                            <li ng-if=\"!isAuthenticated()\"><a href=\"/login\"><i class=\"fa fa-user\"></i> My Account</a></li>\n" +
    "                                            \n" +
    "                                        </ul>\n" +
    "                                        \n" +
    "                                    </nav>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "        <div class=\"header-narrow\" ng-if=\"isAdmin()\" ng-controller=\"AdminHeaderCtrl\">\n" +
    "            <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n" +
    "                <div class=\"navbar-header\">\n" +
    "                        <div class=\"header-logo\">\n" +
    "                            <a href=\"/admin\">\n" +
    "                                <img alt=\"SafeConnect Solar\" width=\"\" height=\"40\" src=\"img/sc_logo.png\">\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"navbar-form navbar-right\">\n" +
    "                        <div ng-if=\"isAuthenticated()\" class=\"header-nav header-nav-top-line\">\n" +
    "                            <a href=\"/admin/admin-account-settings/\">{{name}}&nbsp&nbsp&nbsp</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </nav>\n" +
    "            </div>\n" +
    "    </header>\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/forgot/login-forgot.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/forgot/login-forgot.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div><h1>Forgot Your Password?</h1></div>\n" +
    "        <form name=\"loginForgotForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(loginForgotForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Enter Your Email:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForgotForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForgotForm.email, 'email')\">Please enter a valid email</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-forgot\" ng-disabled=\"!canSave(loginForgotForm)\" ng-click=\"submit()\">Send Reset</button>\n" +
    "                &nbsp;<a href=\"/login\" class=\"btn btn-link\">Back to Login</a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"header\"><h1><strong>Sign In</strong></h1></div>\n" +
    "        <form name=\"loginForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(loginForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Username or Email:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error onkeydown = \"if (event.keyCode == 13)\n" +
    "                        document.getElementById('Submit').click()\">\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(loginForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"user.password\" required server-error onkeydown = \"if (event.keyCode == 13)\n" +
    "                        document.getElementById('Submit').click()\">\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.password, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.password, 'server')\">{{errfor.password}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" id=\"Submit\" class=\"btn btn-primary btn-login\" ng-disabled=\"!canSave(loginForm)\" ng-click=\"submit()\">Sign In</button>\n" +
    "                <!--<button type=\"button\" class=\"btn btn-primary btn-login\">Sign In</button>-->\n" +
    "                &nbsp;<a href=\"/login/forgot\" class=\"btn btn-link\">Forgot your password?</a>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span>Don't have an account?</span>\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-login\" ng-click=\"signUp()\">Create An Account</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <div ng-if=\"social\">\n" +
    "            <hr>\n" +
    "            <p>Or sign in using...</p>\n" +
    "            <div class=\"btn-group btn-group-justified\">\n" +
    "                <a ng-repeat=\"(provider, property) in social\" ng-href=\"{{property.login}}\" target=\"_self\" class=\"btn btn-info\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> {{property.text}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/reset/login-reset.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/reset/login-reset.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div><h1>Reset Your Password</h1></div>\n" +
    "        <form name=\"resetForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(resetForm.password)}\" ng-show=\"(id && email && !success)\">\n" +
    "                <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"user.password\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(resetForm.password, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(resetForm.confirm)}\" ng-show=\"(id && email && !success)\">\n" +
    "                <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"user.confirm\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(resetForm.confirm, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-reset\" ng-show=\"(id && email && !success)\" ng-disabled=\"!canSave(resetForm)\" ng-click=\"submit()\">Set Password</button>\n" +
    "                &nbsp;<a href=\"/login\" class=\"btn btn-link\">Back to Login</a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main.tpl.html",
    "<div role=\"main\" class=\"main\">         \n" +
    "        <div id=\"home-section-1\">\n" +
    "            <div class=\"container\"> \n" +
    "                <div align=\"center\" class=\"row\">\n" +
    "                    <img padding-top=\"-20px\" src=\"/img/pv_appliance.png\" style=\"width:80%;height:80%;align:center\" alt=\"\" class=\"img-responsive\" >\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "       \n" +
    "        \n" +
    "        <div class=\"container\">\n" +
    "        \n" +
    "            <div class=\"row\">\n" +
    "                <hr class=\"tall\">\n" +
    "            </div>\n" +
    "        \n" +
    "        </div>\n" +
    "        \n" +
    "        <div id=\"home-section-2\">\n" +
    "            <div class=\"container\"> \n" +
    "                <div class=\"row\">\n" +
    "                    \n" +
    "                    \n" +
    "                    <div class=\"col-md-7\">\n" +
    "                        <h1 class=\"heading-secondary heading-font spacing-top-lg spacing-bot-lg\">Value Proposition</h1>\n" +
    "                        <h4 class=\"text-color-tertiary subheading-font italic spacing-top-lg spacing-bot-sm\">Safe & Easy Installation</h4>\n" +
    "                        <p class=\"primary-font text-color-tertiary\">SafeConnect Solar is a safer and more-cost effective way to install a solar energy system on your home. SafeConnect's patent-pending safety technology allows us to offer the first complete, UL-approved solar appliance. The appliance simply connects to pre-flashed roof mounts on one side and plugs into a PV Plug (akin to a 240 V dryer plug) on the other. Transforming residential PV in to an appliance cuts the cost in half, while making your home PV system simpler and safer. Watch <a href=\"http://www.youtube.com/embed/oNBBijn4JuY?showinfo=0&amp;wmode=opaque\">SafeConnect’s SafeSolar video</a> to see how.</p>\n" +
    "                       \n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div class=\"col-md-5 col-md-offset-0\">\n" +
    "\n" +
    "                        <img width=\"100%\" height=\"100%\" src=\"/img/SmartBoxMainPageIcon.jpg\" alt=\"SmartBox\">\n" +
    "                        \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        <div id=\"home-section-2-callout\">\n" +
    "            <div class=\"container callout-rbox spacing-top-xlg \"> \n" +
    "                <div class=\"row\">\n" +
    "                    \n" +
    "                \n" +
    "                        \n" +
    "                    <div class=\"col-md-8 col-md-offset-0 spacing-top-lg spacing-bot-lg\">\n" +
    "                        <h4 class=\"text-color-tertiary subheading-font spacing-bot-sm\">No Electrical Permit Required</h4>\n" +
    "                        <p class=\"primary-font text-color-tertiary\">SafeConnect sells complete ready-to-use solar appliances, not high-touch, custom contracting installations. Everything works out of the box and is UL-certified as an appliance. SafeConnect's web-based, up-front pricing eliminates the expensive sales process and gets you a better deal. Start saving on your electrical bill today with SafeConnect.</p> \n" +
    "                        \n" +
    "                    </div>\n" +
    "\n" +
    "                    \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <hr class=\"tall\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        \n" +
    "        <div id=\"home-section-3\">\n" +
    "            <div class=\"container\"> \n" +
    "                <div class=\"row\">\n" +
    "                    \n" +
    "                    <h1 class=\"heading-secondary heading-font spacing-top-md spacing-bot-lg\">Product Demo</h1>\n" +
    "                    \n" +
    "                    <div class=\"embed-responsive embed-responsive-16by9\">\n" +
    "                        <iframe frameborder=\"0\" allowfullscreen=\"\" src=\"http://www.youtube.com/embed/oNBBijn4JuY?showinfo=0&amp;wmode=opaque\"></iframe>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("pricing/checkout/checkout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/checkout/checkout.tpl.html",
    "<div role=\"main\" class=\"main shop\">\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<h2 class=\"mb-none\"><strong>Checkout</strong></h2>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<br>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-9\">\n" +
    "				<div class=\"panel-group\" id=\"accordion\">\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading active\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Shipping Address\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "						<div class=\"paneling\" style='max-height: 100%;'>\n" +
    "							<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "\n" +
    "									<br>\n" +
    "									<form id=\"frmShippingAddress\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>First Name</label>\n" +
    "													<input type=\"text\" name=\"firstnameMailing\" ng-model=\"mailingAddress.name.first\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Last Name</label>\n" +
    "													<input type=\"text\" name=\"lastnameMailing\" ng-model=\"mailingAddress.name.last\"  class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Company Name</label>\n" +
    "													<input type=\"text\" name=\"companyMailing\" ng-model=\"mailingAddress.company\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 1</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine1Mailing\" ng-model=\"mailingAddress.addressLine1\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 2</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine2Mailing\" ng-model=\"mailingAddress.addressLine2\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>City </label>\n" +
    "													<input type=\"text\" name=\"cityMailing\" ng-model=\"mailingAddress.city\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>State </label>\n" +
    "													<input type=\"text\" name=\"stateMailing\" ng-model=\"mailingAddress.state\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Zip Code</label>\n" +
    "													<input type=\"text\" name=\"zipMailing\" ng-model=\"mailingAddress.zip\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Country</label>\n" +
    "													<input type=\"text\" name=\"countryMailing\" ng-model=\"mailingAddress.country\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<br>\n" +
    "\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Billing Address\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "						<div class=\"paneling\">\n" +
    "							<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "									<br>\n" +
    "									<form id=\"frmBillingAddress\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"col-md-12\">\n" +
    "												<span class=\"remember-box checkbox\">\n" +
    "													<label>\n" +
    "														<input type=\"checkbox\" ng-click=\"checkBillAddress()\" ng-Model=\"billingChecked\">Use shipping address?\n" +
    "													</label>\n" +
    "												</span>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>First Name</label>\n" +
    "													<input type=\"text\" name=\"firstnamebilling\" ng-model=\"billingAddress.name.first\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Last Name</label>\n" +
    "													<input type=\"text\" name=\"lastnamebilling\" ng-model=\"billingAddress.name.last\"  class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Company Name</label>\n" +
    "													<input type=\"text\" name=\"companybilling\" ng-model=\"billingAddress.company\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 1</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine1billing\" ng-model=\"billingAddress.addressLine1\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 2</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine2billing\" ng-model=\"billingAddress.addressLine2\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>City </label>\n" +
    "													<input type=\"text\" name=\"citybilling\" ng-model=\"billingAddress.city\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>State </label>\n" +
    "													<input type=\"text\" name=\"statebilling\" ng-model=\"billingAddress.state\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Zip Code</label>\n" +
    "													<input type=\"text\" name=\"zipbilling\" ng-model=\"billingAddress.zip\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Country</label>\n" +
    "													<input type=\"text\" name=\"countrybilling\" ng-model=\"billingAddress.country\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<br>\n" +
    "					<form stripe-form=\"stripeSubmit\" name=\"paymentinfo\">\n" +
    "						<div class=\"panel-group\" id=\"accordion\">\n" +
    "							<div class=\"panel panel-default\">\n" +
    "								<div class=\"panel-heading active\">\n" +
    "									<h4 class=\"panel-title\">\n" +
    "										<a class=\"accordion\">\n" +
    "											Payment Method\n" +
    "										</a>\n" +
    "									</h4>\n" +
    "								</div>\n" +
    "								<div class=\"paneling\">\n" +
    "									<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "										<div class=\"panel-body\">\n" +
    "											<br>\n" +
    "\n" +
    "											<div class=\"row\">\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Card number</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"number\" payments-validate=\"card\" payments-format=\"card\" payments-type-model=\"type\" ng-class=\"myForm.number.$card.type\"/>\n" +
    "													</div>\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Name on card </label>\n" +
    "														<input type=\"text\" ng-model=\"name\" class=\"form-control\">\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Expiration Date</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"expiry\" payments-validate=\"expiry\" payments-format=\"expiry\" />\n" +
    "													</div>\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">CVC</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"cvc\" payments-validate=\"cvc\" payments-format=\"cvc\" payments-type-model=\"type\"/>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<br>\n" +
    "\n" +
    "\n" +
    "							<div class=\"panel panel-default\">\n" +
    "								<div class=\"panel-heading active\">\n" +
    "									<h4 class=\"panel-title\">\n" +
    "										<a class=\"accordion\">\n" +
    "											Order Review\n" +
    "										</a>\n" +
    "									</h4>\n" +
    "								</div>\n" +
    "								<div class=\"paneling\">\n" +
    "									<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "										<div class=\"panel-body\">\n" +
    "											<table class=\"shop_table cart\">\n" +
    "												<thead>\n" +
    "													<tr>\n" +
    "														<th class=\"product-thumbnail\">\n" +
    "															&nbsp;\n" +
    "														</th>\n" +
    "														<th class=\"product-name\">\n" +
    "															Product\n" +
    "														</th>\n" +
    "														<th class=\"product-price\">\n" +
    "															Price\n" +
    "														</th>\n" +
    "														<th class=\"product-quantity\">\n" +
    "															Quantity\n" +
    "														</th>\n" +
    "														<th class=\"product-subtotal\">\n" +
    "															Total\n" +
    "														</th>\n" +
    "													</tr>\n" +
    "												</thead>\n" +
    "												<tbody>\n" +
    "\n" +
    "													<tr ng-repeat=\"item in cart\" class=\"cart_table_item\">\n" +
    "														<td class=\"product-thumbnail\">\n" +
    "															<img ng-src=\"{{item.imagePath}}\" alt=\"{{item.title}}\">\n" +
    "														</td>\n" +
    "														<td class=\"product-name\">\n" +
    "															{{item.title}}\n" +
    "														</td>\n" +
    "														<td class=\"product-price\">\n" +
    "															${{item.price}}\n" +
    "														</td>\n" +
    "														<td class=\"product-quantity\">\n" +
    "															{{item.quantity}}\n" +
    "														</td>\n" +
    "														<td class=\"product-subtotal\">\n" +
    "															${{cart.getProductPrice(item)}}\n" +
    "														</td>\n" +
    "													</tr>\n" +
    "												</tbody>\n" +
    "											</table>\n" +
    "										</div>\n" +
    "\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"actions-continue\">\n" +
    "								<input type=\"submit\" value=\"Place Order\" name=\"proceed\" class=\"btn btn-lg btn-primary mt-xl\">\n" +
    "							</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "						</form>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "			<div id=\"exportthis\" class=\"col-md-3\">\n" +
    "				<h4 class=\"heading-primary\">Cart Totals</h4>\n" +
    "				<table class=\"cart-totals\">\n" +
    "					<tbody>\n" +
    "						<tr class=\"cart-subtotal\">\n" +
    "							<th>\n" +
    "								<strong>Cart Subtotal</strong>\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								<strong><span class=\"amount\">${{cart.getCartPrice()}}</span></strong>\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "						<tr class=\"shipping\">\n" +
    "							<th>\n" +
    "								Shipping\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "							</td>\n" +
    "						</tr>	\n" +
    "						<tr class=\"total\">\n" +
    "							<th>\n" +
    "								<strong>Order Total</strong>\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								<strong><span class=\"amount\">${{cart.getCartPrice()}}</span></strong>\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "					</tbody>\n" +
    "				</table>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "");
}]);

angular.module("pricing/information-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/information-modal.tpl.html",
    "<header class=\"modal-header\">\n" +
    " 	<h3 class=\"modal-title\" id=\"modal-title\">Need more information?</h3>\n" +
    " </header>\n" +
    " <div class=\"modal-body\" id=\"modal-body\">\n" +
    " 	<p>If you need more information before selecting a product, read more about the SafeConnect Solar process.</p>\n" +
    " </div>\n" +
    " <footer class=\"modal-footer\">\n" +
    " 	<div class=\"row\">\n" +
    " 		<div class=\"col-md-12 text-right\">\n" +
    " 			<button class=\"btn btn-primary modal-confirm\" ng-click=\"newPage()\">More Information</button>\n" +
    " 			<button class=\"btn btn-default modal-dismiss\" ng-click=\"cancel()\">Close</button>\n" +
    " 		</div>\n" +
    " 	</div>\n" +
    " </footer>\n" +
    "");
}]);

angular.module("pricing/information/information.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/information/information.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<div class=\"portfolio-title\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-12 center\">\n" +
    "						<h1 class=\"header\"><strong>What Do I Need For My Installation?</strong></h1>\n" +
    "						<br>\n" +
    "						<p><strong>How to Fill in The Required Information. </strong>SafeConnect’s design software determines which products you need. At this stage, the necessary information comes from a solar professional. After your contractor determines how much solar energy your home requires, ask him or her to tell you the (1) AC system size, (2) bus bar rating, (3) compatibility of your solar panels, (4) number of panels, and (5) distance from the last panel to the SmartBox mounting location. Enter this information below.</p>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<br>\n" +
    "			<br>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<br>\n" +
    "			<br>\n" +
    "			<form name=\"calculatingForm\">\n" +
    "				\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-8\">\n" +
    "						<alert ng-repeat=\"alert in alerts.calculating\" type=\"{{alert.type}}\" close=\"closeAlert('calculating', $index)\">{{alert.msg}}</alert>\n" +
    "						<div class=\"form-group\" ng-class=\"{'has-error': hasError(calculatingForm.AC_size_input)}\">\n" +
    "							<label class=\"control-label\" for=\"AC_size_input\">AC System Size (kW): </label>\n" +
    "							<input type=\"text\" name=\"AC_size_input\" id=\"AC_size_input\" class=\"form-control\" ng-model=\"AC_size_input\" ng-change=\"change();\" pos valid-number acmax required server-error>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'required')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'server')\">{{errfor.username}}</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'pos')\">System size must be a positive number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'isNum')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'acmax')\">Maximum AC system size is 7.6 kW</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-8\">\n" +
    "						<div class=\"form-group\" >\n" +
    "							<label class=\"control-label\" for=\"bus_bar_rating\">Bus Bar Rating: </label>\n" +
    "							<select id=\"bus_bar_rating\" name=\"bus_bar_rating\" class=\"form-control\" ng-model=\"bus_bar_rating\">\n" +
    "								<option value=\"1\">1-99</option>\n" +
    "								<option value=\"2\">100-199</option>\n" +
    "								<option value=\"3\">200+</option>\n" +
    "							</select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-8 \">\n" +
    "						<div class=\"form-group\">\n" +
    "							<label class=\"control-label\" for=\"acceptable_panels\">Do You Have SafeConnect Compatible Solar Panels? </label><br>\n" +
    "							\n" +
    "							<label float=\"left;\" style=\"padding-left:30px\">\n" +
    "								<input type=\"radio\" name=\"acceptable_panels\" ng-change=\"panels_check(2)\" data-ng-model=\"acceptable_panels\" value=\"2\">\n" +
    "								Yes&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "							</label>\n" +
    "							<label>\n" +
    "								<input type=\"radio\" name=\"acceptable_panels\" ng-change=\"panels_check(1)\" data-ng-model=\"acceptable_panels\" value=\"1\">\n" +
    "								No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "							</label>\n" +
    "							<span><a id=\"panel_view\" href ng-click=\"panelModal()\">view compatible modules</a></span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class =\"row\">\n" +
    "					<div class=\"col-md-8\">\n" +
    "						<alert ng-repeat=\"alert in alerts.calculating\" type=\"{{alert.type}}\" close=\"closeAlert('calculating', $index)\">{{alert.msg}}</alert>\n" +
    "						<div class=\"form-group\" ng-class=\"{'has-error': hasError(calculatingForm.num_panels_input)}\">\n" +
    "							<label class=\"control-label\" for=\"num_panels_input\">Number of Panels: </label>\n" +
    "							<input type=\"text\" name=\"num_panels_input\" id=\"num_panels_input\" class=\"form-control\" ng-model=\"num_panels_input\" ng-model-options=\"{ updateOn: 'blur'}\" pos valid-number-no-decimals required server-error>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.num_panels_input, 'required')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.num_panels_input, 'server')\">{{errfor.num_panels_input}}</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.num_panels_input, 'pos')\">Number of panels must be a positive number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.num_panels_input, 'isInt')\">Please enter a valid number</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class =\"row\">\n" +
    "					<div ng-attr-class=\"{{(AC_size_input>3.6) && 'col-md-4' || 'col-md-8' }}\" >\n" +
    "						<alert ng-repeat=\"alert in alerts.calculating\" type=\"{{alert.type}}\" close=\"closeAlert('calculating', $index)\">{{alert.msg}}</alert>\n" +
    "						<div class=\"form-group\" ng-class=\"{'has-error': hasError(calculatingForm.d_length_input)}\">\n" +
    "							<label ng-show=\"(AC_size_input>3.6)\" class=\"control-label\" for=\"d_length_input\">Length of Roof Run to SmartBox 1: </label>\n" +
    "							<label ng-hide=\"(AC_size_input>3.6)\" class=\"control-label\" for=\"d_length2_input\">Length of Roof Run to SmartBox: </label>\n" +
    "							<input type=\"text\" name=\"d_length_input\" ng-model-options=\"{ updateOn: 'blur'}\" id=\"d_length_input\" class=\"form-control\" ng-model=\"d_length_input\" cablemin cablemax valid-number required server-error>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'required')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'server')\">{{errfor.d_length_input}}</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'cablemin')\">Minimum cable length is 8 feet</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'cablemax')\">Maximum cable length is 80 feet</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'isNum')\">Please enter a valid number</span>\n" +
    "						</div>\n" +
    "						\n" +
    "\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-show=\"(AC_size_input>3.6)\" class=\"col-md-4\">\n" +
    "						<alert ng-repeat=\"alert in alerts.calculating\" type=\"{{alert.type}}\" close=\"closeAlert('calculating', $index)\">{{alert.msg}}</alert>\n" +
    "						<div class=\"form-group\" ng-class=\"{'has-error': hasError(calculatingForm.d_length2_input)}\">\n" +
    "							<div title=\"Your system requires two SmartBoxes. You need a length of cable to run to the solar array from each SmartBox. Please enter the lengths of cable for the two SmartBoxes.\" data-toggle=\"tooltip\" data-placement=\"bottom\">\n" +
    "								<label class=\"control-label\" for=\"d_length2_input\"><i class=\"fa fa-info-circle\" style=\"color:#545454\"></i> Length of Roof Run to SmartBox 2: </label>\n" +
    "							</div>\n" +
    "							<input type=\"text\" name=\"d_length2_input\" id=\"d_length2_input\" class=\"form-control\" ng-model=\"d_length2_input\" cable2min cablemax valid-number required server-error>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'required')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'server')\">{{errfor.d_length_input}}</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'cable2min')\">Minimum cable length is 8 feet</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'cablemax')\">Maximum cable length is 80 feet</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'isNum')\">Please enter a valid number</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class =\"row\">\n" +
    "						<div class=\"col-md-8\" align=\"right\">\n" +
    "							<div class=\"form-group\">\n" +
    "								<button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(calculatingForm)\" ng-click=\"calculate(acceptable_panels, d_length_input, d_length2_input)\">Calculate</button>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<div class=\"col-md-4\">\n" +
    "			<div class=\"spacing-bot-md spacing-left-md center\">\n" +
    "				<img padding-left=\"20%\" width=\"140%\" height=\"140%\" src=\"/img/SmartBoxMainPageIcon.jpg\" alt=\"SmartBox\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-show=\"no_cart_bus_bar\" class=\"row\" style=\"margin-top:50px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<br>\n" +
    "				<br>\n" +
    "			</div>\n" +
    "			<div class=\"row\" style=\"padding-left:30px;padding-top:30px;\">\n" +
    "				<div class=\"col-md-8\" align=\"left\">\n" +
    "					<font size=\"3\">You do not have a sufficient bus bar rating for the recommended configuration. Please contact your contractor if you would like to upgrade your system. </font>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-show=\"no_cart_panels\" class=\"row\" style=\"margin-top:50px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<br>\n" +
    "				<br>\n" +
    "			</div>\n" +
    "			<div class=\"row\" style=\"padding-left:30px;padding-top:30px;\">\n" +
    "				<div class=\"col-md-8\" align=\"left\">\n" +
    "					<font size=\"3\">Your panels are not compatible with current SafeConnect configurations. To view compatible panels view <a id=\"panel_view\" href ng-click=\"panelModal()\">compatible solar panels</a> .<br /> </font>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<a name=\"cart\">\n" +
    "			<div ng-show=\"calculated\" class=\"row\">\n" +
    "				<div class=\"col-md-8\">\n" +
    "					<h4>What you need: </h4>\n" +
    "					<br>\n" +
    "					<br>\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Cart\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "						<div class=\"main shop\">\n" +
    "							<div class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "									<table class=\"shop_table cart\">\n" +
    "										<thead>\n" +
    "											<tr>\n" +
    "												<th class=\"product-remove\">\n" +
    "													&nbsp;\n" +
    "												</th>\n" +
    "												<th class=\"product-thumbnail\">\n" +
    "													&nbsp;\n" +
    "												</th>\n" +
    "												<th class=\"product-name\">\n" +
    "													Product\n" +
    "												</th>\n" +
    "												<th class=\"product-price\">\n" +
    "													Price\n" +
    "												</th>\n" +
    "												<th>\n" +
    "												</th>\n" +
    "												<th class=\"product-quantity\">\n" +
    "													Quantity\n" +
    "												</th>\n" +
    "												<th class=\"product-subtotal\">\n" +
    "													Total\n" +
    "												</th>\n" +
    "											</tr>\n" +
    "										</thead>\n" +
    "										<tbody ng-if=\"cart.length\">\n" +
    "											<tr class=\"cart_table_item\" ng-repeat=\"product in cart | filter: greaterThan('quantity', 0)\">\n" +
    "												<td class=\"product-remove\">\n" +
    "													<a title=\"Remove this item\" class=\"remove\" ng-click=\"removeFromCart(product)\">\n" +
    "														<i class=\"fa fa-times\"></i>\n" +
    "													</a>\n" +
    "												</td>\n" +
    "												<td class=\"product-thumbnail\">\n" +
    "													<a><img width=\"100\" height=\"100\" alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\">\n" +
    "													</a>\n" +
    "												</td>\n" +
    "												<td class=\"product-name\">\n" +
    "													<a href=\"shop-product-sidebar.html\">{{product.title}}</a>\n" +
    "												</td>\n" +
    "												<td class=\"product-price\">\n" +
    "													<span class=\"amount\">${{product.price}}</span>\n" +
    "												</td>\n" +
    "												<td>\n" +
    "													&nbsp;\n" +
    "												</td>\n" +
    "												<td class=\"product-quantity\">\n" +
    "													<form class=\"cart\">\n" +
    "														<div class=\"quantity\">\n" +
    "															<button class=\"minus\" ng-click=\"subtractQty(product)\">-</button>\n" +
    "															<input type=\"text\" name=\"quantity\" id=\"qty\" class=\"input-text qty text\" ng-model=\"product.quantity\">\n" +
    "															<button class=\"plus\" ng-click=\"addQty(product)\">+</button>\n" +
    "														</div>\n" +
    "													</form>\n" +
    "												</td>\n" +
    "												<td class=\"product-subtotal\">\n" +
    "													<span class=\"amount\">${{getProductPrice(product)}}</span>\n" +
    "												</td>\n" +
    "											</tr>\n" +
    "										</tbody>\n" +
    "									</table>\n" +
    "\n" +
    "\n" +
    "									<div style=\"width:50%; float:right;\">\n" +
    "										<!-- <h4 class=\"heading-primary\">Cart Totals</h4> -->\n" +
    "										<br>\n" +
    "										<table class=\"cart-totals\">\n" +
    "											<tbody >\n" +
    "												<tr class=\"cart-subtotal\">\n" +
    "													<th>\n" +
    "														<strong>Cart Subtotal</strong>\n" +
    "													</th>\n" +
    "													<td>\n" +
    "														<strong>${{getCartPrice()}}</strong>\n" +
    "													</td>\n" +
    "												</tr>\n" +
    "												<tr class=\"shipping\">\n" +
    "													<th>\n" +
    "														Shipping\n" +
    "													</th>\n" +
    "													<td>\n" +
    "														Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "													</td>\n" +
    "												</tr>\n" +
    "												<tr class=\"total\">\n" +
    "													<th>\n" +
    "														<strong>Order Total</strong>\n" +
    "													</th>\n" +
    "													<td>\n" +
    "														<strong><span class=\"amount\">${{getCartPrice()}}</span></strong>\n" +
    "													</td>\n" +
    "												</tr>\n" +
    "											</tbody>\n" +
    "										</table>\n" +
    "\n" +
    "										<div class=\"actions-continue\">\n" +
    "											<input type=\"submit\" value=\"Checkout\" name=\"update_cart\" ng-disabled=\"cart.length == 0\" ng-click=\"checkout();\" class=\"btn btn-default\">\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</a>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("pricing/login-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/login-modal.tpl.html",
    "<header class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\" id=\"modal-title\">Do you want to sign in?</h3>\n" +
    "</header>\n" +
    "<footer class=\"modal-footer\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12 text-right\">\n" +
    "			<button class=\"btn btn-primary modal-confirm\" ng-click=\"signin()\">Sign in or create account</button>\n" +
    "		<button class=\"btn btn-primary modal-confirm\" ng-click=\"guest()\">Continue as guest</button>\n" +
    "		<button class=\"btn btn-default modal-dismiss\" ng-click=\"cancel()\">Cancel</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("pricing/login-modal2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/login-modal2.tpl.html",
    "<header class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\" id=\"modal-title\">Do you want to sign in?</h3>\n" +
    "</header>\n" +
    "<footer class=\"modal-footer\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12 text-right\">\n" +
    "			<button class=\"btn btn-primary modal-confirm\" ng-click=\"signin2()\">Sign in or create account</button>\n" +
    "		<button class=\"btn btn-primary modal-confirm\" ng-click=\"guest2()\">Continue as guest</button>\n" +
    "		<button class=\"btn btn-default modal-dismiss\" ng-click=\"cancel2()\">Cancel</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("pricing/panel-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/panel-modal.tpl.html",
    "<header class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\" id=\"modal-title\">Compatible Modules</h3>\n" +
    "</header>\n" +
    "\n" +
    "\n" +
    "		\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h1 style=\"padding: 25px 25px;\" class=\"mb-none preheading-font\">ET Solar</h1>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<br>\n" +
    "\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "		<ul style=\"list-style: none;margin-right: 30px;\">\n" +
    "			<li class=\"col-md-6 col-sm-6 col-xs-12\" ng-repeat=\"product in etproducts\">\n" +
    "				<span >\n" +
    "					<span class=\"product-thumb-info\" style=\"margin-bottom: 30px;padding: 25px 25px;\">\n" +
    "						\n" +
    "						<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "						\n" +
    "						<span class=\"product-thumb-info-content\">\n" +
    "							<p>{{product.title}}</p>\n" +
    "					</span>\n" +
    "				\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		</div>\n" +
    "	\n" +
    "\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h1 style=\"padding: 25px 25px;\" class=\"mb-none preheading-font\">SunPower</h1>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<br>\n" +
    "\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "		<ul style=\"list-style: none;margin-right: 30px;\">\n" +
    "			<li class=\"col-md-6 col-sm-6 col-xs-12\" ng-repeat=\"product in sunproducts\">\n" +
    "				<span >\n" +
    "					<span class=\"product-thumb-info\" style=\"margin-bottom: 30px;padding: 25px 25px;\">\n" +
    "						\n" +
    "						<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "						\n" +
    "						<span class=\"product-thumb-info-content\">\n" +
    "							<p>{{product.title}}</p>\n" +
    "					</span>\n" +
    "				\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		</div>\n" +
    "\n" +
    "");
}]);

angular.module("pricing/pricing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/pricing.tpl.html",
    "<div role=\"main\" class=\"main shop\">\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "		\n" +
    "		<div class=\"row spacing-bot-neg hidden\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<hr class=\"tall\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div class=\"spacing-top-md spacing-bot-neg\">\n" +
    "			<div class=\"row spacing-top-neg\">\n" +
    "				<div class=\"col-md-6\" style=\"margin-top: 50px;\">\n" +
    "					<h1 class=\"mb-none\"><strong>Smart Shop</strong></h1>\n" +
    "				</div>\n" +
    "				\n" +
    "				<div class=\"col-md-6 col-md-offset-0\">\n" +
    "					<div class=\"featured-box featured-box-primary featured-box-text-left\" style=\"height: 90px; min-height:20px;\">\n" +
    "						<div id=\"cart-total-box\" class=\"box-content\">\n" +
    "							<div class=\"row spacing-top-neg spacing-bot-none\">\n" +
    "								<div class=\"col-xs-6\">\n" +
    "									<h4 class=\"heading-font font-color-tertiary\"><strong>Cart Total: </strong><span>${{getCartPrice()}}</span></h4>\n" +
    "								</div>\n" +
    "								<div class=\"col-xs-6\">\n" +
    "									<div class=\"align-right\">\n" +
    "										<button class=\"btn btn-lg btn-primary mr-xs mb-lg\" type=\"button\" ng-disabled=\"cart.length == 0\" ng-click=\"checkout();\">Checkout</button>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row spacing-top-sm\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h1 class=\"mb-none preheading-font\">SmartBox</h1>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<ul class=\"products product-thumb-info-list\">\n" +
    "				<li class=\"col-md-6 col-sm-6 col-xs-12 product\" ng-repeat=\"product in products| filter:{type:'SmartBox'}\">\n" +
    "					<span style=\"width:50%; height:50%;\" class=\"product-thumb-info\">\n" +
    "						<a href=\"\" class=\"add-to-cart-product\">\n" +
    "							<span><i class=\"fa fa-shopping-cart\"></i>\n" +
    "								<button ng-click=\"addToCart(product);\">Add to cart</button>\n" +
    "							</span>\n" +
    "						</a>\n" +
    "						\n" +
    "						<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "						\n" +
    "						<span class=\"product-thumb-info-content\">\n" +
    "							<h4 class=\"heading-tertiary\">{{product.title}}</h4>\n" +
    "							<span class=\"price text-color-primary\">\n" +
    "								<ins><span class=\"amount\">${{product.price}}</span></ins>\n" +
    "							</span>\n" +
    "						</span>\n" +
    "						\n" +
    "\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "\n" +
    "				\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-6\">\n" +
    "						<h1 class=\"mb-none preheading-font\">SmartCabling</h1>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "\n" +
    "				<div class=\"row\">\n" +
    "					<ul class=\"products product-thumb-info-list\">\n" +
    "						<li class=\"col-md-4 col-sm-6 col-xs-12 product\" ng-repeat=\"product in products | filter:{type:'Cabling'}\"\">\n" +
    "							<span style=\"width:75%; height:75%;\" class=\"product-thumb-info\">\n" +
    "								<span class=\"product-thumb-info\">\n" +
    "									<a href=\"\" class=\"add-to-cart-product\">\n" +
    "										<span><i class=\"fa fa-shopping-cart\"></i>\n" +
    "											<button ng-click=\"addToCart(product);\">Add to cart</button>\n" +
    "										</span>\n" +
    "									</a>\n" +
    "									\n" +
    "									<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "									\n" +
    "									<span class=\"product-thumb-info-content\">\n" +
    "										<h4 class=\"heading-tertiary\">{{product.title}}</h4>\n" +
    "										<span class=\"price text-color-primary\">\n" +
    "											<ins><span class=\"amount\">${{product.price}}</span></ins>\n" +
    "										</span>\n" +
    "									</span>\n" +
    "								</span>\n" +
    "								\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-md-6\">\n" +
    "							<h1 class=\"mb-none preheading-font\">SmartConnector</h1>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"row\">\n" +
    "						<ul class=\"products product-thumb-info-list\">\n" +
    "							<li class=\"col-md-6 col-sm-6 col-xs-12 product\" ng-repeat=\"product in products | filter:{type:'Adapter'}\"\">\n" +
    "								<span style=\"width:47%; height:47%;\" class=\"product-thumb-info\">\n" +
    "									<span class=\"product-thumb-info\">\n" +
    "										<a href=\"\" class=\"add-to-cart-product\">\n" +
    "											<span><i class=\"fa fa-shopping-cart\"></i>\n" +
    "												<button ng-click=\"addToCart(product);\">Add to cart</button>\n" +
    "											</span>\n" +
    "										</a>\n" +
    "										\n" +
    "										<img class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "										\n" +
    "										<span class=\"product-thumb-info-content\">\n" +
    "											<h4 class=\"heading-tertiary\">{{product.title}}</h4>\n" +
    "											<span class=\"price text-color-primary\">\n" +
    "												<ins><span class=\"amount\">${{product.price}}</span></ins>\n" +
    "											</span>\n" +
    "										</span>\n" +
    "									</span>\n" +
    "								</li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "						\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "					\n" +
    "					<div ng-if=\"cart.length\" class=\"container\">\n" +
    "						\n" +
    "						<div class=\"row spacing-bot-neg\">\n" +
    "							<div class=\"col-md-12\">\n" +
    "								<hr class=\"tall\">\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						\n" +
    "						<div class=\"row\">\n" +
    "							<h1 class=\"mb-none\"><strong>Your Cart</strong></h1>\n" +
    "						</div>\n" +
    "						\n" +
    "						<div class=\"featured-boxes spacing-top-lg\">\n" +
    "							<div class=\"row\">\n" +
    "								<div class=\"col-md-12\">\n" +
    "									<div class=\"panel panel-default\">\n" +
    "										<div class=\"panel-heading\">\n" +
    "											<h4 class=\"panel-title\">\n" +
    "												<a class=\"accordion\">\n" +
    "													Cart\n" +
    "												</a>\n" +
    "											</h4>\n" +
    "										</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "										<div class=\"main shop\">\n" +
    "											<div class=\"accordion-body\">\n" +
    "												<div class=\"panel-body\">\n" +
    "													<table class=\"shop_table cart\">\n" +
    "														<thead>\n" +
    "															<tr>\n" +
    "																<th class=\"product-remove\">\n" +
    "																	&nbsp;\n" +
    "																</th>\n" +
    "																<th class=\"product-thumbnail\">\n" +
    "																	&nbsp;\n" +
    "																</th>\n" +
    "																<th class=\"product-name\">\n" +
    "																	Product\n" +
    "																</th>\n" +
    "																<th class=\"product-price\">\n" +
    "																	Price\n" +
    "																</th>\n" +
    "																<th>\n" +
    "																</th>\n" +
    "																<th class=\"product-quantity\">\n" +
    "																	Quantity\n" +
    "																</th>\n" +
    "																<th class=\"product-subtotal\">\n" +
    "																	Total\n" +
    "																</th>\n" +
    "															</tr>\n" +
    "														</thead>\n" +
    "														<tbody ng-if=\"cart.length\">\n" +
    "															<tr class=\"cart_table_item\" ng-repeat=\"product in cart | filter: greaterThan('quantity', 0)\">\n" +
    "																<td class=\"product-remove\">\n" +
    "																	<a title=\"Remove this item\" class=\"remove\" ng-click=\"removeFromCart(product)\">\n" +
    "																		<i class=\"fa fa-times\"></i>\n" +
    "																	</a>\n" +
    "																</td>\n" +
    "																<td class=\"product-thumbnail\">\n" +
    "																	<a><img width=\"100\" height=\"100\" alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\">\n" +
    "																	</a>\n" +
    "																</td>\n" +
    "																<td class=\"product-name\">\n" +
    "																	<a href=\"shop-product-sidebar.html\">{{product.title}}</a>\n" +
    "																</td>\n" +
    "																<td class=\"product-price\">\n" +
    "																	<span class=\"amount\">${{product.price}}</span>\n" +
    "																</td>\n" +
    "																<td>\n" +
    "																	&nbsp;\n" +
    "																</td>\n" +
    "																<td class=\"product-quantity\">\n" +
    "																	<form class=\"cart\">\n" +
    "																		<div class=\"quantity\">\n" +
    "																			<button class=\"minus\" ng-click=\"subtractQty(product)\">-</button>\n" +
    "																			<input type=\"text\" name=\"quantity\" id=\"qty\" class=\"input-text qty text\" ng-model=\"product.quantity\">\n" +
    "																			<button class=\"plus\" ng-click=\"addQty(product)\">+</button>\n" +
    "																		</div>\n" +
    "																	</form>\n" +
    "																</td>\n" +
    "																<td class=\"product-subtotal\">\n" +
    "																	<span class=\"amount\">${{getProductPrice(product)}}</span>\n" +
    "																</td>\n" +
    "															</tr>\n" +
    "														</tbody>\n" +
    "													</table>\n" +
    "\n" +
    "\n" +
    "													<div style=\"width:50%; float:right;\">\n" +
    "														<!-- <h4 class=\"heading-primary\">Cart Totals</h4> -->\n" +
    "														<br>\n" +
    "														<table class=\"cart-totals\">\n" +
    "															<tbody >\n" +
    "																<tr class=\"cart-subtotal\">\n" +
    "																	<th>\n" +
    "																		<strong>Cart Subtotal</strong>\n" +
    "																	</th>\n" +
    "																	<td>\n" +
    "																		<strong>${{getCartPrice()}}</strong>\n" +
    "																	</td>\n" +
    "																</tr>\n" +
    "																<tr class=\"shipping\">\n" +
    "																	<th>\n" +
    "																		Shipping\n" +
    "																	</th>\n" +
    "																	<td>\n" +
    "																		Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "																	</td>\n" +
    "																</tr>\n" +
    "																<tr class=\"total\">\n" +
    "																	<th>\n" +
    "																		<strong>Order Total</strong>\n" +
    "																	</th>\n" +
    "																	<td>\n" +
    "																		<strong><span class=\"amount\">${{getCartPrice()}}</span></strong>\n" +
    "																	</td>\n" +
    "																</tr>\n" +
    "															</tbody>\n" +
    "														</table>\n" +
    "\n" +
    "														<div class=\"actions-continue\">\n" +
    "															<input type=\"submit\" value=\"Checkout\" name=\"update_cart\" ng-disabled=\"cart.length == 0\" ng-click=\"checkout();\" class=\"btn btn-default\">\n" +
    "														</div>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>");
}]);

angular.module("sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sidebar.tpl.html",
    "<div ng-controller=\"SidebarCtrl\" flex layout=\"row\">\n" +
    "    <md-sidenav flex=\"15\" md-is-locked-open=\"true\" class=\"md-whiteframe-4dp\">\n" +
    "        <md-content flex layout=\"column\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <div class=\"sidebar-nav navbar-collapse\">\n" +
    "                    <nav class=\"navbar-sidebar\" ng-if=\"isAdmin()\" role=\"navigation\">\n" +
    "                        <ul class=\"nav\" id=\"side-menu\">\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin\"><i class=\"fa fa-bar-chart-o fa-fw\"></i> Dashboard</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/activity\"><i class=\"fa fa-bar-chart-o fa-fw\"></i> Activity</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/sales\"><i class=\"fa fa-table fa-fw\"></i> Sales</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/purchase-history\"><i class=\"fa fa-edit fa-fw\"></i> Purchase History</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/users\"><i class=\"fa fa-wrench fa-fw\"></i> User Info</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/developers\"><i class=\"fa fa-sitemap fa-fw\"></i> Developers</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/pricing\"><i class=\"fa fa-files-o fa-fw\"></i> Pricing</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"\" ng-click=\"logout()\"><i class=\"fa fa-user\"></i> Sign Out</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </nav>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-content>\n" +
    "    </md-sidenav>\n" +
    "</div>\n" +
    "");
}]);

angular.module("signup/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signup/signup.tpl.html",
    "<div class=\"row\" id=\"signup\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <h1 class=\"header\"><strong>Create an Account</strong></h1>\n" +
    "        <form name=\"signupForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(signupForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(signupForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Email Address:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(signupForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"user.password\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.password, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.password, 'server')\">{{errfor.password}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-signup\" ng-disabled=\"!canSave(signupForm)\" ng-click=\"submit()\">Create My Account</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <div ng-if=\"social\">\n" +
    "            <hr>\n" +
    "            <p>Or sign in using...</p>\n" +
    "            <div class=\"btn-group btn-group-justified\">\n" +
    "                <a ng-repeat=\"(provider, property) in social\" ng-href=\"{{property.login}}\" target=\"_self\" class=\"btn btn-info\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> {{property.text}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 smartboxlogo\">\n" +
    "        <img src=\"../img/SmartBox_home.png\" alt=\"SmartBox\" width: 100%;>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("specs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("specs.tpl.html",
    "<div role=\"main\" class=\"main\">		\n" +
    "	<div class=\"container\" align=\"middle\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<h1 class=\"header\"><strong>Product Specifications</strong></h1>\n" +
    "			<div class=\"row mt-xlg\">\n" +
    "				<div ng-controller=\"OwlCtrl\" id=\"slides_control\">\n" +
    "					<div class=\"col-md-6 col-md-offset-3\">					\n" +
    "						<carousel interval=\"3000\">\n" +
    "							<slide ng-repeat=\"product in products\" active=\"slide.active\">\n" +
    "								<img ng-src=\"{{product.image}}\"  class=\"img-responsive center-block\" style=\"margin:0 auto;\">\n" +
    "								<div class=\"carousel-caption\">\n" +
    "									<h4>{{product.title}}</h4>\n" +
    "								</div>\n" +
    "							</slide>\n" +
    "						</carousel>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<ul class=\"products product-thumb-info-list\">\n" +
    "			<li class=\"col-md-3 col-sm-6 col-xs-12 product\" ng-repeat=\"product in products | filter:{type:'Cabling'}\"\">\n" +
    "				<span class=\"product-thumb-info\">\n" +
    "					<span class=\"product-thumb-info\">\n" +
    "						<a href=\"\" class=\"add-to-cart-product\">\n" +
    "							<span><i class=\"fa fa-shopping-cart\"></i>\n" +
    "								<button ng-click=\"addToCart(product);\">Add to cart</button>\n" +
    "							</span>\n" +
    "						</a>\n" +
    "						\n" +
    "						<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "						\n" +
    "						<span class=\"product-thumb-info-content\">\n" +
    "							<h4 class=\"heading-tertiary\">{{product.title}}</h4>\n" +
    "							<span class=\"price text-color-primary\">\n" +
    "								<ins><span class=\"amount\">${{product.price}}</span></ins>\n" +
    "							</span>\n" +
    "						</span>\n" +
    "					</span>\n" +
    "				\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "\n" +
    "		  \n" +
    "		\n" +
    "		<div class=\"row\">\n" +
    "			\n" +
    "			<div style=\"margin-top: 50px;\" class=\"col-md-12\">\n" +
    "				<div class=\"tabs tabs-secondary\">\n" +
    "					<ul class=\"nav nav-tabs\">\n" +
    "						<li ng-class=\"{ active: isSet(1) }\">\n" +
    "							<a href ng-click=\"setTab(1)\"><h4 class=\"tabheading-font text-color-secondary\">3.6 kW SmartBox</h4></a>\n" +
    "						</li>\n" +
    "						<li ng-class=\"{ active: isSet(2) }\">\n" +
    "							<a href ng-click=\"setTab(2)\"><h4 class=\"tabheading-font text-color-secondary\">SmartCabling</h4></a>\n" +
    "						</li>\n" +
    "						<li ng-class=\"{ active: isSet(3) }\">\n" +
    "							<a href ng-click=\"setTab(3)\"><h4 class=\"tabheading-font text-color-secondary\">SmartConnectors</h4></a>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "					<div class=\"tab-content\">\n" +
    "						<div ng-show=\"isSet(1)\">\n" +
    "							<div id=\"36-smart-box-tb\" class=\"tab-pane active\">\n" +
    "								<h4>3.6 kW SmartBox</h4>\n" +
    "								<p>The SmartBox masterminds all of the electrical safety functionality behind your home PV system.  The SmartBox continuously manages voltage and frequency, checks for electrical faults, and ensures that the right number of PV panels are connected. If any of these operating conditions are violated the system shuts down safely and immediately, protecting you and your family.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-show=\"isSet(2)\">\n" +
    "							<div id=\"72-smart-box-tb\" class=\"tab-pane\">\n" +
    "								<h4>SmartCabling</h4>\n" +
    "								<p>SafeConnect’s SmartCabling ends the era of specialized electricians connecting bare wires to connect your solar panels to your home’s electrical system.  SafeConnect replaces failure-prone and cumbersome on-site wiring with pluggable connections that are safe for anyone to click together.  The cables come in various lengths. SafeConnect’s PV system design tool will specify the right ones based on the design of your home PV system.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-show=\"isSet(3)\">\n" +
    "							<div id=\"cabling-tb\" class=\"tab-pane\">\n" +
    "								<h4>SmartConnectors</h4>\n" +
    "								<p>SafeConnect’s cabling system and SmartBox work with standard AC solar panels. The panels are simply connected to each other using one SmartConnector for each. The last module is connected to the SmartCabling and run down to the SmartBox mounted on the side of your home.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>");
}]);
