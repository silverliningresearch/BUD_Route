function route_mapping(currentQuarter, currentRoute) {

  var newRoute = currentRoute;
  if (currentQuarter == "2025-Q3") 
  {
      if ((currentRoute == "BSL-EZS") 
        || (currentRoute == "BSL-EJU")
        || (currentRoute == "BSL-EZY"))
      {
          newRoute = "BSL-EC";
      }

      if ((currentRoute == "CDG-EZS") 
        || (currentRoute == "CDG-EJU")
        || (currentRoute == "CDG-EZY"))
      {
          newRoute = "CDG-EC";
      }

      if ((currentRoute == "GVA-EZS") 
        || (currentRoute == "GVA-EJU")
        || (currentRoute == "GVA-EZY"))
      {
          newRoute = "GVA-EC";
      }

      if ((currentRoute == "LGW-EZS") 
        || (currentRoute == "LGW-EJU")
        || (currentRoute == "LGW-EZY"))
      {
          newRoute = "LGW-EC";
      }

    if ((currentRoute == "LYS-EZS") 
        || (currentRoute == "LYS-EJU")
        || (currentRoute == "LYS-EZY"))
      {
          newRoute = "LYS-EC";
      }

    if (currentRoute == "VCE-W4") 
    {
        newRoute = "VCE-W6";
    }

  }

  //correction for EZS / EC
  if (currentQuarter == "2025-Q4") 
  {

      if ((currentRoute == "BSL-EZS") 
        || (currentRoute == "BSL-EJU")
        || (currentRoute == "BSL-EZY"))
      {
          newRoute = "BSL-EC";
      }

      if ((currentRoute == "CDG-EZS") 
        || (currentRoute == "CDG-EJU")
        || (currentRoute == "CDG-EZY"))
      {
          newRoute = "CDG-EC";
      }

      if ((currentRoute == "GVA-EZS") 
        || (currentRoute == "GVA-EJU")
        || (currentRoute == "GVA-EZY"))
      {
          newRoute = "GVA-EC";
      }

      if ((currentRoute == "LGW-EZS") 
        || (currentRoute == "LGW-EJU")
        || (currentRoute == "LGW-EZY"))
      {
          newRoute = "LGW-EC";
      }

    if ((currentRoute == "LYS-EZS") 
        || (currentRoute == "LYS-EJU")
        || (currentRoute == "LYS-EZY"))
      {
          newRoute = "LYS-EC";
      }

      if (currentRoute == "EDI-RK") 
      {
          newRoute = "EDI-FR";
      }   
      if (currentRoute == "MAN-RK") 
      {
          newRoute = "MAN-FR";
      }           
      if (currentRoute == "STN-RK") 
      {
          newRoute = "STN-FR";
      }  
      if (currentRoute == "BFS-RK") 
      {
          newRoute = "BFS-FR";
      }      
      
      if ((currentRoute == "BOD-EJU") )
      {
          newRoute = "BOD-EC";
      }
      
      if ((currentRoute == "NTE-EJU") )
      {
          newRoute = "NTE-EC";
      }
  }

  //correction for EZS / EC
  if (currentQuarter == "2026-Q1") 
  {

      if ((currentRoute == "BSL-EZS") 
        || (currentRoute == "BSL-EJU")
        || (currentRoute == "BSL-EZY"))
      {
          newRoute = "BSL-EC";
      }

      if ((currentRoute == "CDG-EZS") 
        || (currentRoute == "CDG-EJU")
        || (currentRoute == "CDG-EZY"))
      {
          newRoute = "CDG-EC";
      }

      if ((currentRoute == "GVA-EZS") 
        || (currentRoute == "GVA-EJU")
        || (currentRoute == "GVA-EZY"))
      {
          newRoute = "GVA-EC";
      }

      if ((currentRoute == "LGW-EZS") 
        || (currentRoute == "LGW-EJU")
        || (currentRoute == "LGW-EZY"))
      {
          newRoute = "LGW-EC";
      }

    if ((currentRoute == "LYS-EZS") 
        || (currentRoute == "LYS-EJU")
        || (currentRoute == "LYS-EZY"))
      {
          newRoute = "LYS-EC";
      }

      // if (currentRoute == "EDI-RK") 
      // {
      //     newRoute = "EDI-FR";
      // }   
      // if (currentRoute == "MAN-RK") 
      // {
      //     newRoute = "MAN-FR";
      // }           
      // if (currentRoute == "STN-RK") 
      // {
      //     newRoute = "STN-FR";
      // }  
        
      if ((currentRoute == "BOD-EJU") )
      {
          newRoute = "BOD-EC";
      }
      
      if ((currentRoute == "NTE-EJU") )
      {
          newRoute = "NTE-EC";
      }

      if ((currentRoute == "BSL-EZS") )
      {
          newRoute = "BSL-EC";
      }
  }

          //correction for EZS / EC
  if (currentQuarter == "2026-Q2") 
  {

      if ((currentRoute == "BSL-EZS") 
        || (currentRoute == "BSL-EJU")
        || (currentRoute == "BSL-EZY"))
      {
          newRoute = "BSL-EC";
      }

      if ((currentRoute == "CDG-EZS") 
        || (currentRoute == "CDG-EJU")
        || (currentRoute == "CDG-EZY"))
      {
          newRoute = "CDG-EC";
      }

      if ((currentRoute == "GVA-EZS") 
        || (currentRoute == "GVA-EJU")
        || (currentRoute == "GVA-EZY"))
      {
          newRoute = "GVA-EC";
      }

      if ((currentRoute == "LGW-EZS") 
        || (currentRoute == "LGW-EJU")
        || (currentRoute == "LGW-EZY"))
      {
          newRoute = "LGW-EC";
      }

    if ((currentRoute == "LYS-EZS") 
        || (currentRoute == "LYS-EJU")
        || (currentRoute == "LYS-EZY"))
      {
          newRoute = "LYS-EC";
      }

      // if (currentRoute == "EDI-RK") 
      // {
      //     newRoute = "EDI-FR";
      // }   
      // if (currentRoute == "MAN-RK") 
      // {
      //     newRoute = "MAN-FR";
      // }           
      // if (currentRoute == "STN-RK") 
      // {
      //     newRoute = "STN-FR";
      // }  
        
      if ((currentRoute == "BOD-EJU") )
      {
          newRoute = "BOD-EC";
      }
      
      if ((currentRoute == "NTE-EJU") )
      {
          newRoute = "NTE-EC";
      }

      if ((currentRoute == "BSL-EZS") )
      {
          newRoute = "BSL-EC";
      }
      if ((currentRoute == "CPH-D8") )
      {
          newRoute = "CPH-DY";
      }      
      if ((currentRoute == "ARN-D8") )
      {
          newRoute = "ARN-DY";
      }                  

      if ((currentRoute == "LGW-EC") )
      {
          newRoute = "LGW-EC";
      }

  }

  //correction for EZS / EC
  if (currentQuarter == "2026-Q3") 
  {

      if ((currentRoute == "BSL-EZS") 
        || (currentRoute == "BSL-EJU")
        || (currentRoute == "BSL-EZY"))
      {
          newRoute = "BSL-EC";
      }

      if ((currentRoute == "CDG-EZS") 
        || (currentRoute == "CDG-EJU")
        || (currentRoute == "CDG-EZY"))
      {
          newRoute = "CDG-EC";
      }

      if ((currentRoute == "GVA-EZS") 
        || (currentRoute == "GVA-EJU")
        || (currentRoute == "GVA-EZY"))
      {
          newRoute = "GVA-EC";
      }

      if ((currentRoute == "LGW-EZS") 
        || (currentRoute == "LGW-EJU")
        || (currentRoute == "LGW-EZY"))
      {
          newRoute = "LGW-EC";
      }

    if ((currentRoute == "LYS-EZS") 
        || (currentRoute == "LYS-EJU")
        || (currentRoute == "LYS-EZY"))
      {
          newRoute = "LYS-EC";
      }

      // if (currentRoute == "EDI-RK") 
      // {
      //     newRoute = "EDI-FR";
      // }   
      // if (currentRoute == "MAN-RK") 
      // {
      //     newRoute = "MAN-FR";
      // }           
      // if (currentRoute == "STN-RK") 
      // {
      //     newRoute = "STN-FR";
      // }  
        
      if ((currentRoute == "BOD-EJU") )
      {
          newRoute = "BOD-EC";
      }
      
      if ((currentRoute == "NTE-EJU") )
      {
          newRoute = "NTE-EC";
      }

      if ((currentRoute == "BSL-EZS") )
      {
          newRoute = "BSL-EC";
      }
      if ((currentRoute == "CPH-D8") )
      {
          newRoute = "CPH-DY";
      }      
      if ((currentRoute == "ARN-D8") )
      {
          newRoute = "ARN-DY";
      }                  

      if ((currentRoute == "LGW-EC") )
      {
          newRoute = "LGW-EC";
      }

  }

  //correction for EZS / EC
  if (currentQuarter == "2026-Q4") 
  {
    if ((currentRoute == "ARN-D8") )
    {
        newRoute = "ARN-DY";
    }    

    if ((currentRoute == "CPH-D8") )
    {
        newRoute = "CPH-DY";
    }      

    if ((currentRoute == "BFS-EZS") 
      || (currentRoute == "BFS-EJU")
      || (currentRoute == "BFS-EZY"))
    {
        newRoute = "BFS-EC";
    }


    if ((currentRoute == "BOD-EZS") 
      || (currentRoute == "BOD-EJU")
      || (currentRoute == "BOD-EZY"))
    {
        newRoute = "BOD-EC";
    }

    if ((currentRoute == "BRS-EZS") 
      || (currentRoute == "BRS-EJU")
      || (currentRoute == "BRS-EZY"))
    {
        newRoute = "BRS-EC";
    }

    if ((currentRoute == "BSL-EZS") 
      || (currentRoute == "BSL-EJU")
      || (currentRoute == "BSL-EZY"))
    {
        newRoute = "BSL-EC";
    }          
      
    if ((currentRoute == "CDG-EZS") 
      || (currentRoute == "CDG-EJU")
      || (currentRoute == "CDG-EZY"))
    {
        newRoute = "CDG-EC";
    }

      if ((currentRoute == "GVA-EZS") 
        || (currentRoute == "GVA-EJU")
        || (currentRoute == "GVA-EZY"))
      {
          newRoute = "GVA-EC";
      }

      if ((currentRoute == "LGW-EZS") 
        || (currentRoute == "LGW-EJU")
        || (currentRoute == "LGW-EZY"))
      {
          newRoute = "LGW-EC";
      }

      if ((currentRoute == "LPL-EZS") 
        || (currentRoute == "LPL-EJU")
        || (currentRoute == "LPL-EZY"))
      {
          newRoute = "LPL-EC";
      }

    if ((currentRoute == "LYS-EZS") 
        || (currentRoute == "LYS-EJU")
        || (currentRoute == "LYS-EZY"))
      {
          newRoute = "LYS-EC";
      }

      if ((currentRoute == "NTE-EZS") 
        || (currentRoute == "NTE-EJU")
        || (currentRoute == "NTE-EZY"))
      {
          newRoute = "NTE-EC";
      }

      if ((currentRoute == "SEN-EZS") 
        || (currentRoute == "SEN-EJU")
        || (currentRoute == "SEN-EZY"))
      {
          newRoute = "SEN-EC";
      }

      if ((currentRoute == "FCO-W4") )
      {
          newRoute = "FCO-W6";
      }

      if ((currentRoute == "FMM-W4") )
      {
          newRoute = "FMM-W6";
      }

      if ((currentRoute == "NAP-W4") )
      {
          newRoute = "NAP-W6";
      }
      if ((currentRoute == "MXP-W4") )
      {
          newRoute = "MXP-W6";
      }
        
      if (currentRoute == "VCE-W4") 
      {
          newRoute = "VCE-W6";
      }

  }

  return newRoute;
}
