using Microsoft.AspNetCore.Mvc;
using Mission2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

//Controller Layer
namespace Mission2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calculator(Class model)
        {
            return View();
        }
    }
}
