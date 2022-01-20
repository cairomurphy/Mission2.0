using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

//Model with validation and getters/setters
namespace Mission2.Models
{
    public class Class
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Enter a number between 0 - 100")]
        public int Assignment { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Enter a number between 0 - 100")]
        public int GroupProject { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Enter a number between 0 - 100")]
        public int Quiz { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Enter a number between 0 - 100")]
        public int Exam { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Enter a number between 0 - 100")]
        public int INTEX { get; set; }
    }
}
