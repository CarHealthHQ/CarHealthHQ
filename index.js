document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('year-select');
    const manufacturerSelect = document.getElementById('manufacturer-select');
    const modelSelect = document.getElementById('model-select');
    const submitBtn = document.getElementById('submit-btn');

    // Example function to populate dropdowns
    function populateDropdown(select, options) {
        select.innerHTML = options.map(o => `<option value="${o}">${o}</option>`).join('');
        select.disabled = false;
    }

    // All car manufacturers
    const allManufacturers = [
        "Abarth", "Acura", "Alfa Romeo", "Alpine", "Aston Martin", "Audi", "Bentley", "BMW",
        "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Citroën", "Datsun", "DeLorean",
        "Dodge", "DS Automobiles", "Ferrari", "Fiat", "Ford", "Genesis", "GMC", "Holden", "Honda",
        "Hummer", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini",
        "Lancia", "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Maybach", "Mazda", "McLaren",
        "Mercedes-Benz", "Mercury", "Mini", "Mitsubishi", "Nissan", "Oldsmobile", "Pagani", "Peugeot",
        "Plymouth", "Pontiac", "Porsche", "Ram", "Renault", "Rolls-Royce", "Saab", "Saturn", "Scion",
        "Smart", "Subaru", "Suzuki", "Tata", "Tesla", "Toyota", "Volkswagen", "Volvo"
    ];

    // Enable manufacturer dropdown after selecting a year
    yearSelect.addEventListener('change', () => {
        const selectedYear = yearSelect.value;
        populateDropdown(manufacturerSelect, allManufacturers);
        manufacturerSelect.disabled = false;
        // Clear model dropdown when changing the year
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        modelSelect.disabled = true;
        updateSubmitButtonState();
    });

    // Enable model dropdown after selecting a manufacturer
    manufacturerSelect.addEventListener('change', () => {
        const selectedManufacturer = manufacturerSelect.value;
        const carModels = {
            // Define car models for each manufacturer here
            // Example:
            "Ford": ['Model 1', 'Model 2', 'Model 3'],
            "Toyota": ['Model A', 'Model B', 'Model C'],
            "Honda": ['Model X', 'Model Y', 'Model Z'],
            // Add more models for other manufacturers
        };
        const models = carModels[selectedManufacturer] || [];
        populateDropdown(modelSelect, models);
        modelSelect.disabled = false;
        // Enable submit button when all dropdowns have a value
        if (yearSelect.value && manufacturerSelect.value && modelSelect.value) {
            submitBtn.classList.add('enabled');
            submitBtn.disabled = false;
        } else {
            submitBtn.classList.remove('enabled');
            submitBtn.disabled = true;
        }
    });

    // Enable submit button when all dropdowns have a value
    function updateSubmitButtonState() {
        if (yearSelect.value && manufacturerSelect.value && modelSelect.value) {
            submitBtn.classList.add('enabled');
            submitBtn.disabled = false;
        } else {
            submitBtn.classList.remove('enabled');
            submitBtn.disabled = true;
        }
    }

    // Initialize the state of the submit button
    updateSubmitButtonState();

    // Enable submit button when all dropdowns have a value
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', updateSubmitButtonState);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const manufacturerSelect = document.getElementById('manufacturer-select');
    const modelSelect = document.getElementById('model-select');

    const carModels = {
        "Abarth": [
            "Abarth 500", "Abarth 595", "Abarth 595 Turismo", 
            "Abarth 595 Competizione", "Abarth 595 Pista", 
            "Abarth 595 Esseesse", "Abarth 695", "Abarth 695 Rivale", 
            "Abarth 695 70° Anniversario", "Abarth 695 Tributo Ferrari", 
            "Abarth 124 Spider", "Abarth 124 GT", "Abarth Grande Punto", 
            "Abarth Punto Evo", "Abarth 850 TC", "Abarth 1000 TC", 
            "Abarth 750 GT Zagato", "Abarth Simca 2000", 
            "Abarth 2000 Sport Spider", "Abarth 207A Spyder", 
            "Abarth 204A Berlinetta", "Abarth 205A Berlinetta", 
            "Abarth 750 Record Monza", "Abarth 850 Allemano Coupe", 
            "Abarth 850 Allemano Spider", "Abarth 1000 Bialbero", 
            "Abarth 1000 SP", "Abarth 2000 Coupe", "Abarth 3000 Prototipo", 
            "Abarth 131 Rally", "Abarth OT 1000", "Abarth OT 1300", 
            "Abarth OT 1600", "Abarth OT 2000", "Abarth Monomille", 
            "Abarth Biposto"
            // Add models for other manufacturers
        ],
        "Acura": [
            "Acura CL", "Acura CSX", "Acura EL", "Acura ILX", 
            "Acura Integra", "Acura Legend", "Acura MDX", 
            "Acura NSX", "Acura RDX", "Acura RL", "Acura RLX", 
            "Acura RSX", "Acura SLX", "Acura TL", "Acura TLX", 
            "Acura TSX", "Acura Vigor", "Acura ZDX"
        ],

        "Alfa Romeo": [
            "Alfa Romeo 4C", "Alfa Romeo 8C Competizione", "Alfa Romeo 8C Spider", 
            "Alfa Romeo 33 Stradale", "Alfa Romeo 75", "Alfa Romeo 90", 
            "Alfa Romeo 145", "Alfa Romeo 146", "Alfa Romeo 147", 
            "Alfa Romeo 155", "Alfa Romeo 156", "Alfa Romeo 159", 
            "Alfa Romeo 164", "Alfa Romeo 166", "Alfa Romeo Alfetta", 
            "Alfa Romeo Brera", "Alfa Romeo Disco Volante", "Alfa Romeo Giulia", 
            "Alfa Romeo Giulietta", "Alfa Romeo GT", "Alfa Romeo GTV", 
            "Alfa Romeo MiTo", "Alfa Romeo Montreal", "Alfa Romeo Spider", 
            "Alfa Romeo Stelvio", "Alfa Romeo SZ/RZ", "Alfa Romeo Tonale"
        ],

        "Alpine": [
            "Alpine A106", "Alpine A108", "Alpine A110", 
            "Alpine A310", "Alpine GTA", "Alpine A610", 
            "Alpine A110 (2017)", "Alpine A521 (Formula 1 racing car)"
        ],

        "Aston Martin": [
            "Aston Martin DB2", "Aston Martin DB2/4", "Aston Martin DB Mark III",
            "Aston Martin DB4", "Aston Martin DB5", "Aston Martin DB6",
            "Aston Martin DBS (1967)", "Aston Martin V8", 
            "Aston Martin V8 Vantage (1977)", "Aston Martin Virage", 
            "Aston Martin DB7", "Aston Martin Vanquish (2001)", 
            "Aston Martin DB9", "Aston Martin V8 Vantage (2005)", 
            "Aston Martin DBS V12 (2007)", "Aston Martin Rapide", 
            "Aston Martin One-77", "Aston Martin Virage (2011)", 
            "Aston Martin Vanquish (2012)", "Aston Martin V12 Vantage", 
            "Aston Martin DB11", "Aston Martin Valkyrie", 
            "Aston Martin Vantage (2018)", "Aston Martin DBS Superleggera", 
            "Aston Martin DBX", "Aston Martin Victor", "Aston Martin Valhalla"
        ],

        "Audi": [
            "Audi A1", "Audi A3", "Audi A4", "Audi A5", "Audi A6", "Audi A7",
            "Audi A8", "Audi Q2", "Audi Q3", "Audi Q5", "Audi Q7", "Audi Q8",
            "Audi TT", "Audi R8", "Audi e-tron", "Audi e-tron GT",
            "Audi RS3", "Audi RS4", "Audi RS5", "Audi RS6", "Audi RS7",
            "Audi RS Q8", "Audi S3", "Audi S4", "Audi S5", "Audi S6",
            "Audi S7", "Audi S8", "Audi SQ5", "Audi SQ7", "Audi SQ8"
        ],
        "Bentley": [
            "Bentley Arnage", "Bentley Azure", "Bentley Brooklands",
            "Bentley Continental GT", "Bentley Continental Flying Spur",
            "Bentley Continental GTC", "Bentley Bentayga", "Bentley Mulsanne",
            "Bentley Bacalar", "Bentley Flying Spur"
        ],
        "BMW": [
            "BMW 1 Series", "BMW 2 Series", "BMW 3 Series", "BMW 4 Series",
            "BMW 5 Series", "BMW 6 Series", "BMW 7 Series", "BMW 8 Series",
            "BMW X1", "BMW X2", "BMW X3", "BMW X4", "BMW X5", "BMW X6",
            "BMW X7", "BMW Z4", "BMW i3", "BMW i4", "BMW i8", "BMW iX",
            "BMW iX3", "BMW M2", "BMW M3", "BMW M4", "BMW M5", "BMW M6",
            "BMW M8", "BMW X3 M", "BMW X4 M", "BMW X5 M", "BMW X6 M"
        ],

        "Bugatti": [
            "Bugatti Type 35", "Bugatti Type 41 Royale", "Bugatti Type 57",
            "Bugatti EB110", "Bugatti Veyron", "Bugatti Chiron",
            "Bugatti Divo", "Bugatti Centodieci", "Bugatti La Voiture Noire",
            "Bugatti Bolide"
        ],
        "Buick": [
            "Buick Enclave", "Buick Encore", "Buick Encore GX",
            "Buick Envision", "Buick LaCrosse", "Buick Lucerne",
            "Buick Regal", "Buick Verano", "Buick Rainier",
            "Buick Terraza", "Buick Rendezvous", "Buick Park Avenue",
            "Buick LeSabre", "Buick Century", "Buick Riviera",
            "Buick Skylark", "Buick Roadmaster"
        ],
        "Cadillac": [
            "Cadillac CT4", "Cadillac CT5", "Cadillac CT6",
            "Cadillac CTS", "Cadillac ATS", "Cadillac XTS",
            "Cadillac STS", "Cadillac DTS", "Cadillac Escalade",
            "Cadillac XT4", "Cadillac XT5", "Cadillac XT6",
            "Cadillac SRX", "Cadillac ELR", "Cadillac XLR",
            "Cadillac Seville", "Cadillac DeVille", "Cadillac Eldorado",
            "Cadillac Fleetwood"
        ],
            "Chrysler": [
                "Chrysler 300", "Chrysler Pacifica", "Chrysler Voyager",
                "Chrysler Aspen", "Chrysler Town & Country", "Chrysler 200",
                "Chrysler Sebring", "Chrysler Crossfire", "Chrysler PT Cruiser",
                "Chrysler Concorde", "Chrysler LHS", "Chrysler Cirrus",
                "Chrysler LeBaron", "Chrysler Imperial", "Chrysler Fifth Avenue",
                "Chrysler New Yorker"
              ],
              "Chevrolet": [
                "Chevrolet Silverado", "Chevrolet Colorado", "Chevrolet Camaro",
                "Chevrolet Corvette", "Chevrolet Tahoe", "Chevrolet Suburban",
                "Chevrolet Equinox", "Chevrolet Traverse", "Chevrolet Blazer",
                "Chevrolet Trailblazer", "Chevrolet Trax", "Chevrolet Malibu",
                "Chevrolet Impala", "Chevrolet Cruze", "Chevrolet Spark",
                "Chevrolet Sonic", "Chevrolet Bolt", "Chevrolet Volt",
                "Chevrolet Avalanche", "Chevrolet Caprice", "Chevrolet Monte Carlo",
                "Chevrolet Cobalt", "Chevrolet HHR", "Chevrolet S-10",
                "Chevrolet Astro", "Chevrolet Express", "Chevrolet Aveo",
                "Chevrolet Lumina", "Chevrolet SSR", "Chevrolet Uplander"
              ],

              "Citroën": [
                "C1", "C3", "C3 Aircross", "C4", "C4 Cactus", "C4 Picasso",
                "C5", "Berlingo", "Spacetourer"
              ],
              "Datsun": [
                "Go", "Go+", "Redi-Go", "Cross"
              ],
              "DeLorean": [
                "DMC-12"
              ],
              "Dodge": [
                "Charger", "Challenger", "Durango", "Journey",
                "Grand Caravan (Caravan)", "Viper", "Dart"
              ],
              "DS Automobiles": [
                "DS 3", "DS 4", "DS 5", "DS 7 Crossback"
              ],

              "Ferrari": [
                "488 GTB", "488 Spider", "F8 Tributo",
                "Portofino", "Roma", "SF90 Stradale",
                "LaFerrari (limited edition)"
              ],
              "Fiat": [
                "500", "500X", "500L", "124 Spider",
                "Panda", "Tipo", "Ducato", "Fullback"
              ],
              "Ford": [
                "Fiesta", "Focus", "Fusion (Mondeo in some regions)",
                "Mustang", "Escape (Kuga in some regions)", "Explorer",
                "Expedition", "F-150", "F-250", "F-350", "Ranger", "Edge",
                "EcoSport", "Transit", "Bronco (including Bronco Sport)",
                "Mach-E (electric SUV)"
              ],
              "Genesis": [
                "G70", "G80", "G90", "GV70", "GV80"
              ],
              "GMC": [
                "Sierra", "Canyon", "Acadia", "Terrain", "Yukon", "Savana"
              ],

              "Holden": [
                "Commodore", "Astra", "Trax", "Equinox", "Colorado"
              ],
              "Honda": [
                "Accord", "Civic", "Fit (Jazz in some regions)",
                "HR-V", "CR-V", "Pilot", "Odyssey", "Insight",
                "Passport", "Ridgeline"
              ],
              "Hummer": [
                "H1", "H2", "H3", "Hummer EV (electric SUV and pickup truck)"
              ],
              "Hyundai": [
                "Accent", "Elantra", "Sonata", "Tucson", "Santa Fe",
                "Kona", "Palisade", "Venue", "Ioniq (electric and hybrid models)",
                "Nexo (hydrogen fuel cell SUV)"
              ],
              "Infiniti": [
                "Q50", "Q60", "Q70", "QX30", "QX50", "QX60", "QX80"
              ],

              "Isuzu": [
                "D-Max", "MU-X"
              ],
              "Jaguar": [
                "XE", "XF", "XJ", "F-TYPE", "E-PACE", "F-PACE", "I-PACE (electric SUV)"
              ],
              "Jeep": [
                "Wrangler", "Cherokee", "Grand Cherokee", "Compass", "Renegade", "Gladiator (pickup truck)"
              ],
              "Kia": [
                "Rio", "Forte (Cerato in some regions)", "Optima (K5 in some regions)", "Stinger", "Soul",
                "Seltos", "Sportage", "Sorento", "Telluride", "Niro (including hybrid and electric variants)",
                "Carnival (Sedona in some regions)", "EV6 (electric SUV)"
              ],
              "Koenigsegg": [
                "Jesko", "Regera", "Gemera"
              ],

              "Lamborghini": [
                "Aventador", "Huracán", "Urus"
              ],
              "Lancia": [
                "Ypsilon"
              ],
              "Land Rover": [
                "Defender", "Discovery", "Range Rover", "Range Rover Sport",
                "Range Rover Velar", "Range Rover Evoque"
              ],
              "Lexus": [
                "IS", "ES", "GS", "LS", "RC", "LC", "UX", "NX", "RX", "GX", "LX", "CT (discontinued)"
              ],
              "Lincoln": [
                "Zephyr (formerly MKZ)", "Continental", "Corsair", "Nautilus", "Aviator", "Navigator"
              ],
              "Lotus": [
                "Evora", "Exige", "Elise"
              ],
              "Maserati": [
                "Ghibli", "Quattroporte", "Levante", "GranTurismo (discontinued)", "GranCabrio (discontinued)"
              ],
              "Maybach": [
                "Maybach S-Class", "Maybach GLS"
              ],
              "Mazda": [
                "Mazda2 (Demio in some regions)", "Mazda3 (Axela in some regions)",
                "Mazda6 (Atenza in some regions)", "MX-5 Miata (including RF variant)",
                "CX-3", "CX-30", "CX-5", "CX-9"
              ],
              "McLaren": [
                "570S", "570GT", "600LT", "620R", "720S", "765LT", "GT",
                "P1 (limited production, hybrid hypercar)",
                "Senna (limited production, hypercar)"
              ],
              "Nissan": [
                "Versa", "Sentra", "Altima", "Maxima", "350Z", "370Z", "GT-R",
                "Juke (discontinued)", "Kicks", "Rogue", "Murano", "Pathfinder",
                "Armada", "Frontier", "Titan", "Leaf (electric)", "NV200 (van)"
              ],
              "Mercedes-Benz": [
                "A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "CLA", "CLS", "GLA", "GLB",
                "GLC", "GLE", "GLS", "G-Class", "AMG GT", "EQC (electric SUV)", "Metris (known as Vito in some regions)",
                "Sprinter"
              ],
              "Mercury": [
                "Grand Marquis", "Milan", "Montego", "Mariner", "Mountaineer", "Sable"
              ],
              "Mini": [
                "Hardtop (2-door and 4-door)", "Convertible", "Clubman", "Countryman", "Paceman (discontinued)"
              ],
              "Mitsubishi": [
                "Mirage", "Mirage G4 (sedan)", "Lancer (discontinued in some regions)", "Eclipse Cross",
                "Outlander", "Outlander Sport (known as ASX in some regions)",
                "Pajero (known as Montero or Shogun in some regions)", "Triton (known as L200 in some regions)"
              ],
              "Oldsmobile": [
                "Cutlass", "Delta 88", "Aurora", "Alero", "Intrigue", "Bravada"
              ],
              "Pagani": [
                "Huayra", "Zonda"
              ],
              "Peugeot": [
                "108", "208", "308", "508", "2008", "3008", "5008",
                "108", "208", "508", "301", "308 SW", "508 SW",
                "2008 Electric", "e-208 (electric)"
              ],
              "Plymouth": [
                "Barracuda", "Road Runner", "Belvedere", "Fury", "Voyager"
              ],
              "Pontiac": [
                "Grand Prix", "GTO", "Bonneville", "Firebird", "G6", "Vibe", "Solstice"
              ],
              "Porsche": [
                "911", "718 Boxster", "718 Cayman", "Panamera", "Cayenne",
                "Macan", "Taycan (electric)", "911 GT3"
              ],
              "Ram": [
                "Ram 1500", "Ram 2500", "Ram 3500", "Ram 4500",
                "Ram ProMaster (van)", "Ram ProMaster City (van)"
              ],
              "Renault": [
                "Clio", "Captur", "Megane", "Kadjar", "Talisman", "Koleos",
                "Twingo", "Zoe (electric)", "Kangoo", "Master (van)"
              ],
              "Rolls-Royce": [
                "Phantom", "Ghost", "Wraith", "Dawn", "Cullinan"
              ],
              "Saab": [
                "9-3", "9-5", "900", "9000"
              ],
              "Saturn": [
                "Saturn S-Series", "Ion", "Vue", "Aura", "Relay", "Sky"
              ],
              "Scion": [
                "Scion xA", "Scion xB", "Scion tC", "Scion xD", "Scion FR-S (Toyota 86)"
              ],
              "Smart": [
                "Smart EQ ForTwo (electric)", "Smart EQ ForFour (electric)"
              ],
              "Subaru": [
                "Impreza", "Legacy", "Forester", "Outback", "Crosstrek",
                "WRX", "BRZ", "Ascent", "XV (XV Crosstrek in some regions)"
              ],
              "Suzuki": [
                "Suzuki SX4", "Grand Vitara", "Kizashi", "Equator"
              ],
              "Tata": [
                "Tata Tiago", "Tata Tigor", "Tata Altroz", "Tata Nexon",
                "Tata Harrier", "Tata Safari", "Tata Sumo (Sumo Gold in some regions)",
                "Tata Hexa (discontinued)"
              ],
              "Tesla": [
                "Model S", "Model 3", "Model X", "Model Y",
                "Roadster ", "Cybertruck ", "Tesla Semi "
              ],
              "Toyota": [
                "Corolla", "Camry", "Prius", "RAV4", "Highlander",
                "4Runner", "Tacoma", "Tundra", "Sequoia", "Land Cruiser",
                "Supra", "C-HR", "Sienna", "Venza", "Avalon", "Yaris (Vitz in some regions)",
                "Mirai (hydrogen fuel cell vehicle)"
              ],
              "Volkswagen": [
                "Golf", "Jetta", "Passat", "Arteon", "Polo", "Tiguan", "Atlas",
                "Touareg", "ID.3 (electric)", "ID.4 (electric)", "ID.Buzz (upcoming electric)",
                "Taos", "T-Roc", "Amarok"
              ],
              "Volvo": [
                "S60", "S90", "V60", "V90", "XC40", "XC60", "XC70", "XC90",
                "C30 (discontinued)", "C70 (discontinued)"
              ]
    };

    manufacturerSelect.addEventListener('change', function() {
        const selectedManufacturer = this.value;
        const models = carModels[selectedManufacturer] || [];
        modelSelect.innerHTML = models.map(model => `<option value="${model}">${model}</option>`).join('');
        modelSelect.disabled = models.length === 0;
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('search-submit');
  const codeInput = document.getElementById('code-input');
  const modal = document.getElementById('code-modal');
  const closeModalBtn = modal.querySelector('.close-button');

  async function searchCode(code) {
    const fileNames = ['p-codes', 'b-codes', 'c-codes', 'u-codes'];
    for (let fileName of fileNames) {
        try {
            const response = await fetch(`json_data/${fileName}.json`);
            if (!response.ok) {
                continue;
            }
            const data = await response.json();

            // Handling for 'c-codes.json', 'p-codes.json', and 'b-codes.json' format
            if (data['C-Codes'] || data['P-Codes'] || data['B-Codes']) {
                const codes = data['C-Codes'] || data['P-Codes'] || data['B-Codes'];
                if (codes[code]) {
                    const foundCode = codes[code];
                    return {
                        found: true, 
                        description: foundCode.description, 
                        solution: foundCode.solution,
                        seriousness: foundCode.seriousness || 'Not specified',
                        symptoms: foundCode.symptoms || ['Not specified'],
                        causes: foundCode.causes || ['Not specified']
                    };
                }
            }

            // Handling for 'u-codes.json' format
            for (let item of data) {
                if (item.Code === code) {
                    return {
                        found: true,
                        description: item.Description,
                        solution: 'Not specified',
                        seriousness: 'Not specified',
                        symptoms: ['Not specified'],
                        causes: ['Not specified']
                    };
                }
            }

        } catch (error) {
            console.error(error);
        }
    }
    return { found: false };
}
function displayModal(codeInfo, carInfo) {
  const codeDescription = document.getElementById('code-description');
  const codeSeriousness = document.getElementById('code-seriousness');
  const codeSymptoms = document.getElementById('code-symptoms');
  const codeCauses = document.getElementById('code-causes');
  const carInformation = document.getElementById('car-information');

  if (codeInfo.found) {
      codeDescription.textContent = `Description: ${codeInfo.description}\nSolution: ${codeInfo.solution}`;
      codeSeriousness.textContent = `Seriousness: ${codeInfo.seriousness}`;
      codeSymptoms.textContent = `Symptoms: ${codeInfo.symptoms.join(', ')}`;
      codeCauses.textContent = `Causes: ${codeInfo.causes.join(', ')}`;
  } else {
      codeDescription.textContent = 'Code not found or invalid.';
      codeSeriousness.textContent = '';
      codeSymptoms.textContent = '';
      codeCauses.textContent = '';
  }

  carInformation.textContent = `Year: ${carInfo.year}, Manufacturer: ${carInfo.manufacturer}, Model: ${carInfo.model}`;
  modal.style.display = 'block';
}

  submitBtn.addEventListener('click', async () => {
      const code = codeInput.value.trim().toUpperCase();
      if (!code) {
          alert('Please enter an OBD-II code.');
          return;
      }

      const yearSelect = document.getElementById('year-select');
      const manufacturerSelect = document.getElementById('manufacturer-select');
      const modelSelect = document.getElementById('model-select');

      const carInfo = {
          year: yearSelect.value,
          manufacturer: manufacturerSelect.value,
          model: modelSelect.value
      };

      const codeInfo = await searchCode(code);
      displayModal(codeInfo, carInfo);
  });

  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });
});

async function fetchUnsplashImage(searchQuery) {
  const accessKey = 'WVApdWbEuGIc1LNEIxo3MXWPB5ExuTsFG9JCFB1KpMI'; 
  const url = `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // Check if there are any results returned
    if (data.results.length > 0) {
      // Return the URL of the first image's regular-sized version
      return data.results[0].urls.regular;
    } else {
      // If there are no results, return a placeholder image URL or an empty string
      return 'placeholder-image-url.jpg';
    }
  } catch (error) {
    // Log the error to the console and return a placeholder image URL
    console.error('Error fetching image from Unsplash:', error);
    return 'placeholder-image-url.jpg';
  }
}

document.getElementById('search-submit').addEventListener('click', async () => {
  // Get the user's selections from the dropdowns
  const year = document.getElementById('year-select').value;
  const make = document.getElementById('manufacturer-select').value;
  const model = document.getElementById('model-select').value;
  
  // Create a search query string
  const searchQuery = `${year} ${make} ${model}`;
  
  // Fetch the image URL from Unsplash
  const imageUrl = await fetchUnsplashImage(searchQuery);
  
  // Update the src attribute of the img tag in your modal
  document.getElementById('car-image').src = imageUrl;
  
  // Now you would show your modal, the code for this depends on how your modal is implemented
  // For example, if you're using Bootstrap, it might look like this:
  // $('#yourModalId').modal('show');
});