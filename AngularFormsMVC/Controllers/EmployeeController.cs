using AngularFormsMVC.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Mvc;

namespace AngularFormsMVC.Controllers
{
    public class EmployeeController : Controller
    {
        public ActionResult GetEmployees()
        {
            var list = new List<EmployeeVM>
            {
                new EmployeeVM
                {
                    FullName = "Milton Waddams"
                },
                new EmployeeVM
                {
                    FullName = "Andy Bernard"
                }
            };

            var camelCaseFormatter = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(list, camelCaseFormatter),
                ContentType = "application/json"
            };

            return jsonResult;
        }

        public ActionResult Create(EmployeeVM employee)
        {
            if (ModelState.IsValid)
            {
                return new HttpStatusCodeResult(HttpStatusCode.Created, "New employee added");
            }

            var errors = new List<string>();
            errors.Add("Insert failed.");
            if (!ModelState.IsValidField("Notes"))
            {
                errors.Add("Notes must be at least 5 char long.");
            }

            var s = String.Join(" ", errors);

            return new HttpStatusCodeResult(HttpStatusCode.InternalServerError, s);
        }
    }
}