function parseUplink(device, payload)
{
 
    function ExtractTagData(tagValuesObject){
        v = null;
        q = null;
        ts = null;
        return {
            v: (tagValuesObject["v"]),//.toFixed(2)),
            q: tagValuesObject["q"],
            ts: new Date(tagValuesObject["ts"]).toUTCString()
        }
    }

    var N3uronData = payload.asJsonObject();
	
    env.log(N3uronData);
    
    var FT_CF1;
    var FT_CF2;
    var FT_CF3;
    var FT_CF4;
    var FT_Total;
    var FT_Total_TS;
    var DemTeorica;
    var DemTeoricaRound;
    var DemReal;
    var T1_ON;
    var T2_ON;
    var T3_ON;
    var T4_ON;

   //Recorremos cada "tag" del array del json y procesamos lo que nos interesan
   for (let tag in N3uronData) {
  
    switch (tag){
        /* REPETIDO
        case "/PLC2/1":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("1");
                etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                var etv2 = device.endpoints.byAddress("31");
                etv2.updateGenericSensorStatus(ValueData.q, ValueData.ts);
            });
            break;*/

        case "/PLC2/2":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("2");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;

        case "/PLC2/3":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("3");
                 try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            
            });
            break;  
            
        case "/PLC2/4":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("4");
                 try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 
        
        case "/PLC2/5":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("5");
                 try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;   
        
        case "/PLC2/6":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("6");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                }catch{};

            });
            break;
        
        case "/PLC2/7":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("7");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;   
        
        case "/PLC2/8":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("8");
                etv1.updateTemperatureSensorStatus(ValueData.v, ValueData.ts);
            });
            break;

        case "/PLC2/9":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("9");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;   

        case "/PLC2/10":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("10");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
                
            });
            break;  
        
        case "/PLC2/11":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("11");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
            });
            break;
        
        case "/PLC2/12":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("12");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;   
        
        case "/PLC2/13":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("13");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;
        
        case "/PLC2/14":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("14");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;   

        case "/PLC2/15":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("15");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;

        case "/PLC2/16":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("16");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;
        
        case "/PLC2/17":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("17");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;   
             
        case "/PLC2/18":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("18");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  

        case "/PLC2/19":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("19");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;   
        
        case "/PLC2/20":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("20");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;
        
        case "/PLC2/21":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("21");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;   

        case "/PLC2/22":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("22");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;

        case "/PLC2/23":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("23");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;
             
        case "/PLC2/24":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("24");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;  
        
        case "/PLC2/25":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("25");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break; 
        
        case "/PLC2/26":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("26");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;   
        
        case "/PLC2/27":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("27");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;
        
        case "/PLC2/28":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("28");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;   

        case "/PLC2/29":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("29");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                
            });
            break;

        case "/PLC2/30":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("30");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

        case "/PLC2/32":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("32");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

        case "/PLC2/Tot_FT_Teklen":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Tot_FT_Teklen");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

        
        case "/PLC2/VaporFerm":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("VaporFerm");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
        case "/PLC2/VaporExtrac":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("VaporExtrac");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
                   
        case "/PLC2/VaporAlim":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("VaporAlim");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;    

        case "/PLC2/VaporLSI":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("VaporLSI");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;    


            case "/PLC2/CF1_Aire_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Aire_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                    FT_CF1=ValueData.v.toFixed(2);
                    FT_Total_TS=ValueData.ts;
                }catch{};
                
            });
            break; 

            case "/PLC2/CF1_Aire_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Aire_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  
            
            case "/PLC2/CF1_Amon_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Amon_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  

            case "/PLC2/CF1_Amon_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Amon_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

            case "/PLC2/CF1_Fosf_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Fosf_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

             case "/PLC2/CF1_Fosf_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Fosf_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF1_Mosto_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Mosto_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF1_Mosto_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Mosto_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF1_Operac":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Operac");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
            
            case "/PLC2/CF1_TIC_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_TIC_SP");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF1_NombreReceta":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_NombreReceta");
                try{
                    etv1.updateTextContainerStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;  

            case "/PLC2/CF1_Estado":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Estado");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF1_Hora":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Hora");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
            
            case "/PLC2/CF1_Minuto":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_Minuto");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF1_OEE":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF1_OEE");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            //CUBA 2

            case "/PLC2/CF2_Aire_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Aire_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                    FT_CF2=ValueData.v.toFixed(2);
                }catch{};                
            });
            break; 

            case "/PLC2/CF2_Aire_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Aire_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  
            
            case "/PLC2/CF2_Amon_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Amon_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  

            case "/PLC2/CF2_Amon_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Amon_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

            case "/PLC2/CF2_Fosf_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Fosf_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

             case "/PLC2/CF2_Fosf_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Fosf_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF2_Mosto_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Mosto_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF2_Mosto_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Mosto_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF2_Operac":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Operac");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
            
            case "/PLC2/CF2_TIC_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_TIC_SP");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF2_NombreReceta":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_NombreReceta");
                try{
                    etv1.updateTextContainerStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;  

            case "/PLC2/CF2_Estado":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Estado");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;


            case "/PLC2/CF2_Hora":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Hora");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
            
            case "/PLC2/CF2_Minuto":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_Minuto");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF2_OEE":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF2_OEE");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            //CUBA 3

            case "/PLC2/CF3_Aire_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Aire_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                    FT_CF3=ValueData.v.toFixed(2);
                }catch{};
                
            });
            break; 

            case "/PLC2/CF3_Aire_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Aire_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  
            
            case "/PLC2/CF3_Amon_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Amon_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  

            case "/PLC2/CF3_Amon_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Amon_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

            case "/PLC2/CF3_Fosf_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Fosf_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

             case "/PLC2/CF3_Fosf_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Fosf_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF3_Mosto_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Mosto_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF3_Mosto_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Mosto_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF3_Operac":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Operac");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
            
            case "/PLC2/CF3_TIC_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_TIC_SP");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF3_NombreReceta":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_NombreReceta");
                try{
                    etv1.updateTextContainerStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;  

            case "/PLC2/CF3_Estado":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Estado");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;


            case "/PLC2/CF3_Hora":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Hora");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
            
            case "/PLC2/CF3_Minuto":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_Minuto");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF3_OEE":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF3_OEE");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            //CUBA 4------------------------------------------------------------------------------------

            case "/PLC2/CF4_Aire_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Aire_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                    FT_CF4=ValueData.v.toFixed(2);
                }catch{};               
            });
            break; 

            case "/PLC2/CF4_Aire_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Aire_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  
            
            case "/PLC2/CF4_Amon_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Amon_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  

            case "/PLC2/CF4_Amon_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Amon_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

            case "/PLC2/CF4_Fosf_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Fosf_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

             case "/PLC2/CF4_Fosf_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Fosf_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF4_Mosto_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Mosto_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF4_Mosto_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Mosto_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF4_Operac":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Operac");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
            
            case "/PLC2/CF4_TIC_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_TIC_SP");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF4_NombreReceta":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_NombreReceta");
                try{
                    etv1.updateTextContainerStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;  

            case "/PLC2/CF4_Estado":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Estado");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;


            case "/PLC2/CF4_Hora":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Hora");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
            
            case "/PLC2/CF4_Minuto":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_Minuto");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF4_OEE":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF4_OEE");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
           
            case "/PLC2/Coccion_Mensaje":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Coccion_Mensaje");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

           case "/PLC2/Coccion_Estado":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Coccion_Estado");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/Coccion_Recirculaciones":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Coccion_Recirculaciones");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/Coccion_Densidad":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Coccion_Densidad");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/Coccion_Tiempo":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Coccion_Tiempo");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            //NIVELES TANQUE DE MELAZA 2
            case "/PLC2/TK2_Temperatura":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK2_Temperatura");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK2_Presion":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK2_Presion");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK2_Nivel":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK2_Nivel");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            //NIVELES TANQUE DE MELAZA 3 
            case "/PLC2/TK3_Temperatura":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK3_Temperatura");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK3_Presion":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK3_Presion");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK3_Nivel":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK3_Nivel");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            //NIVELES TANQUE DE MELAZA 4
            case "/PLC2/TK4_Temperatura":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK4_Temperatura");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK4_Presion":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK4_Presion");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK4_Nivel":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK4_Nivel");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            //NIVELES TANQUE DE MELAZA 5 
            case "/PLC2/TK5_Temperatura":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK5_Temperatura");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK5_Presion":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK5_Presion");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK5_Nivel":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK5_Nivel");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            //NIVELES TANQUE DE MELAZA 6
            case "/PLC2/TK6_Temperatura":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK6_Temperatura");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK6_Presion":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK6_Presion");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TK6_Nivel":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TK6_Nivel");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/Coccion_LT9011":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Coccion_LT9011");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/Mosto_Cubas":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Mosto_Cubas");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/TKInter_Nivel":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TKInter_Nivel");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

             case "/PLC2/TKInter_Temp":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TKInter_Temp");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/Coccion_PIT9002":
                //Obtenemos el array con lecturas de este tag
                var tagvalues = N3uronData[tag];
                //Recorremos las lecturas y leemos los valores v, q y ts
                tagvalues.forEach(valueElement => {
                    var ValueData = ExtractTagData(valueElement);
                    //Listo, actualizamos el endpoint
                    var etv1 = device.endpoints.byAddress("Coccion_PIT9002");
                    try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
                });
                break;

            case "/PLC2/Coccion_B9004":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Coccion_B9004");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/Turbo1_ON":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Turbo1_ON");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                T1_ON=ValueData.v;
                }catch{};
            });
            break;

             case "/PLC2/Turbo2_ON":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Turbo2_ON");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                T2_ON=ValueData.v;
                }catch{};
            });
            break;

             case "/PLC2/Turbo3_ON":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Turbo3_ON");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                    T3_ON=ValueData.v;
                }catch{};
            });
            break;

             case "/PLC2/Turbo4_ON":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Turbo4_ON");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                    T4_ON=ValueData.v;
                }catch{};
            });
            break;

             case "/PLC2/PresionColector":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("PresionColector");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(3), ValueData.ts);
            });
            break;

            case "/PLC2/AguaProceso_ppm":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("AguaProceso_ppm");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
            });
            break;

            case "/PLC2/AguaProceso_pH":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("AguaProceso_pH");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
            });
            break;

            case "/PLC2/TT-609":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("TT-609");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF5_Operac":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Operac");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF5_NombreReceta":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_NombreReceta");
                try{
                    etv1.updateTextContainerStatus(ValueData.v, ValueData.ts);
                }catch{};
            });
            break;  

           
            case "/PLC2/CF5_Hora":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Hora");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
            
            case "/PLC2/CF5_Minuto":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Minuto");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC2/CF5_OEE":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_OEE");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

              case "/PLC2/CF5_Tiempo_OEE":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Tiempo_OEE");
                 try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
           
        }
   }

    //Total de Aire a cubas
    FT_Total=parseFloat(FT_CF1)+parseFloat(FT_CF2)+parseFloat(FT_CF3)+parseFloat(FT_CF4);
    var etv1 = device.endpoints.byAddress("FT_TotalAire_Cubas");
    etv1.updateGenericSensorStatus(parseFloat(FT_Total).toFixed(2), FT_Total_TS);
    //Demanda Teorica de Turbos
    DemTeorica= parseFloat(FT_Total)/12000;
    DemTeoricaRound=Math.round(DemTeorica);
    if (DemTeorica > DemTeoricaRound){
        DemTeoricaRound++;
    }
    var etv1 = device.endpoints.byAddress("DemTeorica_Turbos");
    etv1.updateGenericSensorStatus(DemTeoricaRound, FT_Total_TS);

    DemReal=0;
    if (T1_ON){
        DemReal++;
    }
    if (T2_ON){
        DemReal++;
    }
    if (T3_ON){
        DemReal++;
    }
    if (T4_ON){
        DemReal++;
    }

    //DemReal=parseInt(T1_ON)+parseInt(T2_ON)+parseInt(T3_ON)+parseInt(T4_ON);
    var etv1 = device.endpoints.byAddress("DemReal_Turbos");
    etv1.updateGenericSensorStatus(parseFloat(DemReal), FT_Total_TS);
   
   //Seteo el estado de la alarma de demanda de turbos cuando la real supere la teorica
    var etv1 = device.endpoints.byAddress("ALM_DemandaTurbos");
    if(parseInt(DemReal) > parseInt(DemTeoricaRound)){
        etv1.updateApplianceStatus(true);  
    }else{
        etv1.updateApplianceStatus(false);
    }

}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }

}