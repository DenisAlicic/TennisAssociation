using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TennisAssociation.Models
{
    public class User
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}