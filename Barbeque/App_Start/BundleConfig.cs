using System.Web;
using System.Web.Optimization;

namespace Barbeque
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(
                new StyleBundle("~/styles")
                  .Include("~/css/app.css")
            );

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/scripts/modernizrlib").Include(
                        "~/scripts/foundation/js/vendor/modernizr.js"));

            bundles.Add(
                new ScriptBundle("~/scripts/vendor")
                  .Include("~/scripts/foundation/js/vendor/jquery.js")

                  .Include("~/scripts/foundation/js/vendor/fastclick.js")
                  .Include("~/scripts/foundation/js/foundation/foundation.js")
                  //.Include("~/scripts/foundation/js/foundation/foundation.accordion.js")
                  //.Include("~/scripts/foundation/js/foundation/foundation.clearing.js")

                  .Include("~/scripts/app.js")
            );
        }
    }
}
