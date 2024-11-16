﻿using Microsoft.AspNetCore.Identity;

namespace WebApi_Identity_Auth.Database
{
    public class User : IdentityUser
    {
        public string? Initials { get; set; }
    }
}
