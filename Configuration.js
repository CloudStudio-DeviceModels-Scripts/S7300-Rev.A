function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Esta función le permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
  // la experiencia del usuario final, ya que permite a la plataforma crear 
  // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
  // crea el dispositivo.

  // En el código siguiente, se crean dos endpoints. El primero es un sensor de 
  // temperatura, mientras que el segundo es un sensor de dióxido de carbono.

  //var e = endpoints.addEndpoint("1", "Densidad de Mosto", endpointType.genericSensor);
  //e.variableTypeId = 1006; //REPETIDO

  endpoints.addEndpoint("2", "Temperatura de Esterilizador de Mosto", endpointType.temperatureSensor);
  var e = endpoints.addEndpoint("3", "Totalizado AzF Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1007;
  var e = endpoints.addEndpoint("4", "Tiempo para OEE Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1008;
  var e = endpoints.addEndpoint("5", "Totalizado de Mosto Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1009;
  var e = endpoints.addEndpoint("6", "Totalizado de Amoniaco Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1009;
  var e = endpoints.addEndpoint("7", "Totalizado de Acid. Fosforico Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1009;
  endpoints.addEndpoint("8", "Temperatura de Cuba 1", endpointType.temperatureSensor);
  var e = endpoints.addEndpoint("9", "Totalizado de Aire de Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1010;
  var e = endpoints.addEndpoint("10", "Totalizado AzF Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1007;
  var e = endpoints.addEndpoint("11", "Tiempo para OEE Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1008;
  var e = endpoints.addEndpoint("12", "Totalizado de Mosto Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1009;
  var e = endpoints.addEndpoint("13", "Totalizado de Amoniaco Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1009;
  var e = endpoints.addEndpoint("14", "Totalizado de Acid. Fosforico Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1009;
  endpoints.addEndpoint("15", "Temperatura de Cuba 2", endpointType.temperatureSensor);
  var e = endpoints.addEndpoint("16", "Totalizado de Aire de Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1010;
  var e = endpoints.addEndpoint("17", "Totalizado AzF Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1007;
  var e = endpoints.addEndpoint("18", "Tiempo para OEE Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1008;
  var e = endpoints.addEndpoint("19", "Totalizado de Mosto Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1009;
  var e = endpoints.addEndpoint("20", "Totalizado de Amoniaco Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1009;
  var e = endpoints.addEndpoint("21", "Totalizado de Acid. Fosforico Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1009;
  endpoints.addEndpoint("22", "Temperatura de Cuba 3", endpointType.temperatureSensor);
  var e = endpoints.addEndpoint("23", "Totalizado de Aire de Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1010;
  var e = endpoints.addEndpoint("24", "Totalizado AzF Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1007;
  var e = endpoints.addEndpoint("25", "Tiempo para OEE Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1008;
  var e = endpoints.addEndpoint("26", "Totalizado de Mosto Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1009;
  var e = endpoints.addEndpoint("27", "Totalizado de Amoniaco Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1009;
  var e = endpoints.addEndpoint("28", "Totalizado de Acid. Fosforico Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1009;
  endpoints.addEndpoint("29", "Temperatura de Cuba 4", endpointType.temperatureSensor);
  var e = endpoints.addEndpoint("30", "Totalizado de Aire de Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1010;
  var e = endpoints.addEndpoint("31", "Calidad de Comunicación", endpointType.genericSensor);
  e.variableTypeId = 1011;
  var e = endpoints.addEndpoint("32", "Caudal de Agua Teklen", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("Tot_FT_Teklen", "Totalizado Agua Teklen", endpointType.genericSensor);
  e.variableTypeId = 1010;
  var e = endpoints.addEndpoint("VaporFerm", "Vapor a Fermentacion", endpointType.genericSensor);
  e.variableTypeId = 1014;
  var e = endpoints.addEndpoint("VaporExtrac", "Vapor a Extracto", endpointType.genericSensor);
  e.variableTypeId = 1014;
  var e = endpoints.addEndpoint("VaporAlim", "Vapor a Alimenticia", endpointType.genericSensor);
  e.variableTypeId = 1014;
  var e = endpoints.addEndpoint("VaporLSI", "Vapor a LSI", endpointType.genericSensor);
  e.variableTypeId = 1014;
  var e = endpoints.addEndpoint("CF1_Aire_PV", "Caudal de Aire Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1013;
var e = endpoints.addEndpoint("CF1_Aire_SP", "SP Caudal de Aire Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF1_Amon_SP", "SP Amoniaco Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF1_Amon_PV", "Amoniaco Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF1_Fosf_SP", "SP Fosforico Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF1_Fosf_PV", "Fosforico Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF1_Mosto_SP", "SP Mosto Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF1_Mosto_PV", "Mosto Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF1_TIC_SP", "SP Temperatura Cuba 1", endpointType.temperatureSensor);
  
  var e = endpoints.addEndpoint("CF1_Operac", "Numero de Operacion Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1018;

  var e = endpoints.addEndpoint("CF1_Estado", "Estado Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1020;

  var e = endpoints.addEndpoint("CF1_Hora", "Hora Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1018;

  var e = endpoints.addEndpoint("CF1_Minuto", "Minuto Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1018;

  var e = endpoints.addEndpoint("CF1_OEE", "OEE Cuba 1", endpointType.genericSensor);
  e.variableTypeId = 1019;

  var e = endpoints.addEndpoint("CF2_Aire_PV", "Caudal de Aire Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1013;
var e = endpoints.addEndpoint("CF2_Aire_SP", "SP Caudal de Aire Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF2_Amon_SP", "SP Amoniaco Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF2_Amon_PV", "Amoniaco Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF2_Fosf_SP", "SP Fosforico Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF2_Fosf_PV", "Fosforico Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF2_Mosto_SP", "SP Mosto Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF2_Mosto_PV", "Mosto Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF2_TIC_SP", "SP Temperatura Cuba 2", endpointType.temperatureSensor);
  
  var e = endpoints.addEndpoint("CF2_Operac", "Numero de Operacion Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1018;

var e = endpoints.addEndpoint("CF2_Estado", "Estado Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1020;
 var e = endpoints.addEndpoint("CF2_Hora", "Hora Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1018;

  var e = endpoints.addEndpoint("CF2_Minuto", "Minuto Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1018;

  var e = endpoints.addEndpoint("CF2_OEE", "OEE Cuba 2", endpointType.genericSensor);
  e.variableTypeId = 1019;
  
  var e = endpoints.addEndpoint("CF3_Aire_PV", "Caudal de Aire Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1013;
var e = endpoints.addEndpoint("CF3_Aire_SP", "SP Caudal de Aire Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF3_Amon_SP", "SP Amoniaco Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF3_Amon_PV", "Amoniaco Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF3_Fosf_SP", "SP Fosforico Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF3_Fosf_PV", "Fosforico Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF3_Mosto_SP", "SP Mosto Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF3_Mosto_PV", "Mosto Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF3_TIC_SP", "SP Temperatura Cuba 3", endpointType.temperatureSensor);
  
  var e = endpoints.addEndpoint("CF3_Operac", "Numero de Operacion Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1018;

var e = endpoints.addEndpoint("CF3_Estado", "Estado Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1020;

 var e = endpoints.addEndpoint("CF3_Hora", "Hora Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1018;

  var e = endpoints.addEndpoint("CF3_Minuto", "Minuto Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1018;

  var e = endpoints.addEndpoint("CF3_OEE", "OEE Cuba 3", endpointType.genericSensor);
  e.variableTypeId = 1019;

  var e = endpoints.addEndpoint("CF4_Aire_PV", "Caudal de Aire Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1013;
var e = endpoints.addEndpoint("CF4_Aire_SP", "SP Caudal de Aire Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF4_Amon_SP", "SP Amoniaco Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF4_Amon_PV", "Amoniaco Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF4_Fosf_SP", "SP Fosforico Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF4_Fosf_PV", "Fosforico Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF4_Mosto_SP", "SP Mosto Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1013;
    var e = endpoints.addEndpoint("CF4_Mosto_PV", "Mosto Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1013;
  var e = endpoints.addEndpoint("CF4_TIC_SP", "SP Temperatura Cuba 4", endpointType.temperatureSensor);
  
  var e = endpoints.addEndpoint("CF4_Operac", "Numero de Operacion Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1018;

var e = endpoints.addEndpoint("CF4_Estado", "Estado Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1020;

 var e = endpoints.addEndpoint("CF4_Hora", "Hora Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1018;

  var e = endpoints.addEndpoint("CF4_Minuto", "Minuto Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1018;
  
  var e = endpoints.addEndpoint("CF4_OEE", "OEE Cuba 4", endpointType.genericSensor);
  e.variableTypeId = 1019;
  
  endpoints.addEndpoint("CF1_NombreReceta", "Nombre Receta Cuba 1", endpointType.textContainer);
  endpoints.addEndpoint("CF2_NombreReceta", "Nombre Receta Cuba 2", endpointType.textContainer);
  endpoints.addEndpoint("CF3_NombreReceta", "Nombre Receta Cuba 3", endpointType.textContainer);
  endpoints.addEndpoint("CF4_NombreReceta", "Nombre Receta Cuba 4", endpointType.textContainer);

var e = endpoints.addEndpoint("Coccion_Mensaje", "Mensajes Coccion", endpointType.genericSensor);
  e.variableTypeId = 1023;

var e = endpoints.addEndpoint("Coccion_Estado", "Estado Coccion", endpointType.genericSensor);
  e.variableTypeId = 1022;

  var e = endpoints.addEndpoint("Coccion_Tiempo", "Tiempo de Marcha Coccion", endpointType.genericSensor);
  e.variableTypeId = 1018;
  
  var e = endpoints.addEndpoint("Coccion_Recirculaciones", "Numero de Recirulaciones Coccion", endpointType.genericSensor);
  e.variableTypeId = 1018;
  
   var e = endpoints.addEndpoint("Coccion_Densidad", "Densidad Mosto de Coccion", endpointType.genericSensor);
  e.variableTypeId = 1006;

    //CAUDAL DE AIRE TOTAL CUBAS
    var e = endpoints.addEndpoint("FT_TotalAire_Cubas", "Caudal Total de Aire a Cubas", endpointType.genericSensor);
    e.variableTypeId = 1013;
    //Demanda Teorica de Turbos
    var e = endpoints.addEndpoint("DemTeorica_Turbos", "Demanda Teorica de Turbos", endpointType.genericSensor);
    e.variableTypeId = 1018;
    var e = endpoints.addEndpoint("DemReal_Turbos", "Demanda Real de Turbos", endpointType.genericSensor);
    e.variableTypeId = 1018;
      var e = endpoints.addEndpoint("ALM_DemandaTurbos", "Alarma Demanda Real Turbos Alta", endpointType.appliance);
    
    //PRESION DEL COLECTOR
    var e = endpoints.addEndpoint("PresionColector", "Presion Colector Aire", endpointType.genericSensor);
    e.variableTypeId = 1021;
    
    //MARCHA DE TURBOS
    var e = endpoints.addEndpoint("Turbo1_ON", "Marcha Turbo 1", endpointType.genericSensor);
    e.variableTypeId = 1022;
    var e = endpoints.addEndpoint("Turbo2_ON", "Marcha Turbo 2", endpointType.genericSensor);
    e.variableTypeId = 1022;
    var e = endpoints.addEndpoint("Turbo3_ON", "Marcha Turbo 3", endpointType.genericSensor);
    e.variableTypeId = 1022;
    var e = endpoints.addEndpoint("Turbo4_ON", "Marcha Turbo 4", endpointType.genericSensor);
    e.variableTypeId = 1022;

    //NIVEL TANQUE DE MELAZA 2
    endpoints.addEndpoint("TK2_Temperatura", "Temperatura TK2 Melaza", endpointType.temperatureSensor);
    var e = endpoints.addEndpoint("TK2_Presion", "Presion TK2 Melaza", endpointType.genericSensor);
    e.variableTypeId = 1021;
    var e = endpoints.addEndpoint("TK2_Nivel", "Nivel TK2 Melaza", endpointType.genericSensor );
    e.variableTypeId = 1024;

    //NIVEL TANQUE DE MELAZA 3
    endpoints.addEndpoint("TK3_Temperatura", "Temperatura TK3 Melaza", endpointType.temperatureSensor);
    var e = endpoints.addEndpoint("TK3_Presion", "Presion TK3 Melaza", endpointType.genericSensor);
    e.variableTypeId = 1021;
    var e =endpoints.addEndpoint("TK3_Nivel", "Nivel TK3 Melaza", endpointType.genericSensor );
    e.variableTypeId = 1024;

    //NIVEL TANQUE DE MELAZA 4
    endpoints.addEndpoint("TK4_Temperatura", "Temperatura TK4 Melaza", endpointType.temperatureSensor);
    var e = endpoints.addEndpoint("TK4_Presion", "Presion TK4 Melaza", endpointType.genericSensor);
    e.variableTypeId = 1021;
    var e = endpoints.addEndpoint("TK4_Nivel", "Nivel TK4 Melaza", endpointType.genericSensor );
    e.variableTypeId = 1024;

    //NIVEL TANQUE DE MELAZA 5
    endpoints.addEndpoint("TK5_Temperatura", "Temperatura TK5 Melaza", endpointType.temperatureSensor);
    var e = endpoints.addEndpoint("TK5_Presion", "Presion TK5 Melaza", endpointType.genericSensor);
    e.variableTypeId = 1021;
    var e = endpoints.addEndpoint("TK5_Nivel", "Nivel TK5 Melaza", endpointType.genericSensor );
    e.variableTypeId = 1024;

    //NIVEL TANQUE DE MELAZA 6
    endpoints.addEndpoint("TK6_Temperatura", "Temperatura TK6 Melaza", endpointType.temperatureSensor);
    var e = endpoints.addEndpoint("TK6_Presion", "Presion TK6 Melaza", endpointType.genericSensor);
    e.variableTypeId = 1021;
    var e = endpoints.addEndpoint("TK6_Nivel", "Nivel TK6 Melaza", endpointType.genericSensor );
    e.variableTypeId = 1024;

    //NIVEL DEL TANQUE DIARIO DE MELAZA
     var e = endpoints.addEndpoint("Coccion_LT9011", "Nivel Diario Melaza", endpointType.genericSensor );
    e.variableTypeId = 1024;

   var e = endpoints.addEndpoint("Mosto_Cubas", "Mosto a Cubas", endpointType.genericSensor );
    e.variableTypeId = 1009;
    var e = endpoints.addEndpoint("TKInter_Nivel", "Nivel TK Intermediario", endpointType.genericSensor );
    e.variableTypeId = 1029;
    endpoints.addEndpoint("TKInter_Temp", "Temperatura TK Intermediario", endpointType.temperatureSensor);
    
    var e = endpoints.addEndpoint("Coccion_PIT9002", "Presion Vapor Esterilizador", endpointType.genericSensor);
    e.variableTypeId = 1021;

    var e = endpoints.addEndpoint("Coccion_B9004", "Estado Bomba 9004", endpointType.genericSensor);
    e.variableTypeId = 1022;

    var e = endpoints.addEndpoint("Manual", "Manual", endpointType.genericSensor);
    e.variableTypeId = 1018;
    e.accessType = endpointAccessType.readWrite;

    //AGUA DE PROCESO
     var e = endpoints.addEndpoint("AguaProceso_ppm", "PPM Agua Proceso", endpointType.genericSensor);
    e.variableTypeId = 1036;
     var e = endpoints.addEndpoint("AguaProceso_pH", "pH Agua Proceso", endpointType.genericSensor);
    e.variableTypeId = 1037;

    endpoints.addEndpoint("TT-609", "Temperatura Tanque 609", endpointType.temperatureSensor);
}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  rules.canDelete = true;
  // rules.canEditSubType = (endpoint.address == "2");
}
