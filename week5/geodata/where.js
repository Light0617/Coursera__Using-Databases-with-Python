myData = [
[42.340082,-71.0894884, 'Northeastern, Boston, MA 02115, USA'],
[38.2113643,-85.7470011, 'Bradley Ave, Louisville, KY, USA'],
[32.778949,35.019648, 'Technion/ Sports Building, Haifa'],
[18.4574518,73.8837999, 'Vishwakarma Institutes Play Ground, Yashodhan Society, Kapil Nagar, Kondhwa Budrukh, Vishwakarma, Maharashtra 411048, India'],
[33.1561058,131.826132, 'Japan, 〒875-0002 Ōita-ken, Usuki-shi, Shitanoe, 1232−2 ＵＭＤ'],
[42.4036847,-71.120482, 'South Hall Tufts University, 30 Lower Campus Rd, Somerville, MA 02144, USA'],
[-38.1518106,145.1345412, 'Monash University, Frankston VIC 3199, Australia'],
[53.2948229,69.4047872, 'Kokshetau 020000, Kazakhstan'],
[40.7127837,-74.0059413, 'New York, NY, USA'],
[52.2869741,104.3050183, 'Irkutsk, Irkutsk Oblast, Russia'],
[31.1790053,121.4237432, 'Shang Hai Jiao Tong Da Xue Fu Shu Di Liu Ren Min Yi Yuan, Xuhui Qu, Shanghai Shi, China, 200231'],
[8.481302,4.611479, 'University Rd, Ilorin, Nigeria'],
[-34.9222085,138.5921522, 'Yungondi Building, Adelaide SA 5000, Australia'],
[47.80949,13.05501, 'Salzburg, Austria'],
[61.4977524,23.7609535, 'Tampere, Finland'],
[59.9342802,30.3350986, 'St Petersburg, Russia'],
[28.6853472,-106.1015266, 'São Paulo, Chihuahua, Chih., Mexico'],
[54.7903112,32.0503663, 'Smolensk, Smolensk Oblast, Russia'],
[24.8614622,67.0099388, 'Karachi, Pakistan'],
[40.4469796,-3.7278167, 'Av. Complutense, Madrid, Spain'],
[24.4325423,54.6174842, 'Masdar Institute Bus Station - Abu Dhabi - United Arab Emirates'],
[51.5266171,-0.1260773, 'University Of London, 1-11 Cartwright Gardens, Kings Cross, London WC1H 9EB, UK'],
[39.5069974,-84.745231, 'Oxford, OH 45056, USA'],
[59.393847,24.6650872, 'TTÜ staadion, 12616 Tallinn, Estonia'],
[58.3733281,26.7265098, 'Tartu Ülikooli Füüsikahoone, 50103 Tartu, Estonia'],
[33.6778327,-117.8151285, 'Padua, Irvine, CA 92614, USA'],
[18.5544976,73.8257325, 'Pune University, Ganeshkhind, Pune, Maharashtra, India'],
[37.8764984,-122.2804342, 'California St, Berkeley, CA, USA'],
[43.0412831,-89.4301473, 'University of Wisconsin-Madison Arboretum, 1207 Seminole Hwy, Madison, WI 53711, USA'],
[51.745806,19.4489068, 'Instytut Informatyki Stosowanej, Politechnika Łódzka, 90-924 Łódź, Poland'],
[38.3946981,27.0322689, 'İnciraltı, Dokuz Eylül Ünv. Hst., 35330 Balçova/İzmir, Turkey'],
[39.9314428,116.3049709, 'Bei Jing Shi Fan Da Xue, Haidian Qu, Beijing Shi, China, 100000'],
[33.9519347,-83.357567, 'Athens, GA, USA'],
[10.7295115,79.0196067, 'Sastra University Road, Tirumalaisamudram, Tamil Nadu 613401, India'],
[21.1470404,79.0397862, 'Nagpur University Campus, Nagpur, Maharashtra 440033, India'],
[41.9197689,-91.649501, 'Duke St SW, Cedar Rapids, IA 52404, USA'],
[37.7634731,-122.4390636, 'States St, San Francisco, CA 94114, USA'],
[-23.5505199,-46.6333094, 'São Paulo, State of São Paulo, Brazil'],
[30.2850284,-97.7335226, 'University of Texas at Austin, Austin, TX, USA'],
[61.6887271,27.2721457, 'Mikkeli, Finland'],
[32.4204729,-85.0323718, 'H. Curtis Pitts Hall, 3413 S Seale Rd, Phenix City, AL 36869, USA'],
[41.557583,-8.397568, 'Universidade do Minho, 4710 Braga, Portugal'],
[28.1655981,112.9526566, 'Yue Lu Shan Guo Jia Da Xue Ke Ji Yuan Chuang Ye Da Sha, Yuelu Qu, Changsha Shi, Hunan Sheng, China, 410006'],
[-33.0444219,-71.6066334, 'Pontificia Universidad Catolica De Valparaiso - Gimpert, Valparaíso, Región de Valparaíso, Chile'],
[40.6331249,-89.3985283, 'Illinois, USA'],
[30.0199119,31.5001527, 'AUC Library, Cairo Governorate 11835, Egypt'],
[55.1170375,36.5970818, 'Obninsk, Kaluga Oblast, Russia'],
[31.767879,-106.440736, 'Washington, El Paso, TX 79905, USA'],
[49.9935,36.230383, 'Kharkiv, Kharkiv Oblast, Ukraine'],
[43.8562586,18.4130763, 'Sarajevo, Bosnia and Herzegovina'],
[3.4321247,-76.5461709, 'Parqueadero Universidad Del Valle, Cali, Valle del Cauca, Colombia'],
[40.0082221,-105.2591119, 'Colorado Ave & University Heights, Boulder, CO 80302, USA'],
[53.4129429,59.0016233, 'Magnitogorsk, Chelyabinsk Oblast, Russia'],
[46.4062583,8.9040484, 'Usc, 6749, Switzerland'],
[52.124815,-106.589195, 'Simon Fraser Crescent, Saskatoon, SK S7H, Canada'],
[34.0247033,-81.0131844, 'New York Ave, Columbia, SC 29204, USA'],
[38.1999105,-85.7659121, 'Southern Pkwy, Louisville, KY, USA'],
[14.6063194,121.0977669, 'Warsaw, Pasig, Metro Manila, Philippines'],
[52.2296756,21.0122287, 'Warsaw, Poland'],
[-40.900557,174.885971, 'New Zealand'],
[-40.3850866,175.6140639, 'Massey University, Palmerston North, New Zealand'],
[35.8715218,-97.5672431, 'Noble Ave, Guthrie, OK 73044, USA'],
[45.1847248,9.1582069, '27100 Pavia PV, Italy'],
[38.6598662,-90.3123536, 'Columbia Ave, University City, MO 63130, USA'],
[50.0755381,14.4378005, 'Prague, Czech Republic'],
[41.8313852,-87.6272216, 'Iit Tower, 10 W 35th St, Chicago, IL 60616, USA'],
[40.7933949,-77.8600012, 'State College, PA, USA'],
[33.4249307,-111.8884532, 'Utah, Tempe, AZ 85281, USA'],
[39.4813156,-0.3505, 'Universitat Politècnica, 46022 Valencia, Spain'],
[33.6140008,-117.8440006, 'Vienna, Newport Beach, CA 92660, USA'],
[44.4267674,26.1025384, 'Bucharest, Romania'],
[33.7063317,-117.7733121, 'New Haven, Irvine, CA 92620, USA'],
[47.761605,-122.19303, 'UW Bothell & Cascadia College, Bothell, WA 98011, USA'],
[38.6679152,-90.3322259, 'Drexel Dr, University City, MO 63130, USA'],
[32.083852,34.79197, 'Helsinki St, Tel Aviv-Yafo, Israel'],
[42.320138,-83.230993, 'University of Michigan, Dearborn, MI 48128, USA'],
[40.4432289,-79.9441368, 'Carnegie Mellon University, Pausch Bridge, Pittsburgh, PA 15213, USA'],
[55.8304307,49.0660806, 'Kazan, Tatarstan, Russia'],
[12.0263438,79.8492812, 'Pondicherry University, Kalapet, Puducherry 605014, India'],
[30.7897514,120.7760636, 'Jia Xing Nan Yang Zhi Ye Ji Shu Xue Yuan, Xiuzhou Qu, Jiaxing Shi, Zhejiang Sheng, China, 314000'],
[35.712815,135.9711705, 'Nyu, Mihama, Mikata District, Fukui Prefecture 919-1201, Japan'],
[-23.5431786,-46.6291845, 'State of São Paulo, Brazil'],
[47.5584793,21.620443, 'Debrecen, Debrecen University-Botanical Garden, 4032 Hungary'],
[34.1515641,-117.3354402, 'N State St, California, USA'],
[50.4501,30.5234, 'Kiev, Ukraine, 02000'],
[46.4618977,-80.9664534, 'University Laurentian, Copper Cliff, ON P0M 1N0, Canada'],
[55.755826,37.6173, 'Moscow, Russia'],
[52.2016671,0.1177882, 'University Of Cambridge, Cambridge CB2, UK'],
[35.9525664,51.490619, 'Payame Noor, Meygun, Tehran, Iran'],
[35.246756,33.0307541, 'ODTÜ Misafirhane, Kalkanlı'],
[46.5189865,6.5676007, 'EPFL, 1015 Lausanne, Switzerland'],
[45.2671352,19.8335496, 'Novi Sad, Serbia'],
[57.6954209,11.9853213, 'Göteborgs universitetsbibliotek, Renströmsgatan 4, 412 55 Göteborg, Sweden'],
[45.7488716,21.2086793, 'Timișoara, Romania'],
[53.8931837,27.547338, 'Monument to Fallen Professors and Students of the Belarusian State University, Minsk, Belarus'],
[22.4828735,88.394867, 'Jadavpur University Lake, Sahid Smirity Colony, Pancha Sayar, Kolkata, West Bengal 700094'],
[26.1529683,91.6639235, 'Gauhati University, Jalukbari, Guwahati, Assam, India'],
[-34.5178509,-58.4831979, 'Universidad, Vicente López, Buenos Aires, Argentina'],
[44.4061457,8.9682634, 'Università degli studi di Genova - Dipartimento di Medicina Sperimentale (DIMES), 16143 Genova, Italy'],
[13.7164911,100.4874338, 'Thon Buri, Bangkok 10600, Thailand'],
[4.8602595,-74.0333032, 'Universidad De La Sabana, Chía, Cundinamarca, Colombia'],
[43.4553461,-76.5104973, 'Oswego, NY, USA'],
[17.4930263,78.3906218, 'Jawaharlal Nehru Technological University, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085, India'],
[50.503887,4.469936, 'Belgium'],
[42.3518484,-71.1107301, 'Boston University Bridge, Massachusetts, USA'],
[64.9078809,-147.7117155, 'Manchester Loop, Fairbanks, AK 99712, USA'],
[51.1877226,6.7938734, 'Fachhochschule Düsseldorf, 40225 Düsseldorf, Germany'],
[27.6169691,-99.4631289, 'Simon Bolivar Blvd, Laredo, TX 78045, USA'],
[39.174335,-86.505469, 'Hilltop Garden and Nature Center at Indiana University, 2367 E 10th St, Bloomington, IN 47408, USA'],
[18.9331831,72.8341894, 'KP Shethi Building, Janmabhoomi Marg, Kala Ghoda, Fort, Mumbai, Maharashtra 400001, India'],
[42.3077541,-83.0182189, 'Ottawa St, Windsor, ON, Canada'],
[28.3580163,75.5887989, 'BITS, Pilani, Rajasthan 333031, India'],
[35.8278379,-78.6593111, 'Transylvania Ave, Raleigh, NC 27609, USA'],
[25.25968,82.989115, 'IIT Gymkhana, RR 11, Banaras Hindu University Campus, Varanasi, Uttar Pradesh 221001, India'],
[50.862282,-2.4998561, 'E M Mitchell & Sons, Hermitage, Dorchester DT2 7BB, UK'],
[18.4074917,-66.062465, 'Ave Central, San Juan, Puerto Rico'],
[50.4471975,30.4522355, 'Obshchezhitiye NTUU KPI №10, Vyborzka St, 2/24, Kyiv, Ukraine'],
[-9.9541653,-67.8384015, 'Tv. Paraíba - Geraldo Fleming, Rio Branco - AC, Brazil'],
[47.497912,19.040235, 'Budapest, Hungary'],
[55.755826,37.6173, 'Moscow, Russia'],
[59.9342802,30.3350986, 'St Petersburg, Russia'],
[41.7508391,-88.1535352, 'Naperville, IL, USA'],
[37.424106,-122.1660756, 'Stanford, CA, USA'],
[45.7484997,21.2399277, 'Cantina Politehnică, Strada Alexandru Vaida - Voievod, Timișoara, Romania'],
[16.4226352,120.5906046, 'National Baguio University, Bokawkan, Baguio, Benguet, Philippines'],
[-35.417,149.1, 'Monash ACT 2904, Australia'],
[-7.2159454,-35.9065247, 'Campo da UFCG - R. Silva Barbosa - Universitário, Campina Grande - PB, 58400-850, Brazil'],
[19.3188895,-99.1843676, 'National Autonomous University of Mexico, Mexico City, Mexico'],
[35.7058075,51.4020909, 'Tehran University, Tehran, Iran'],
[36.8838957,-76.3040214, 'Old Dominion University, 5115 Hampton Blvd, Norfolk, VA 23508, USA'],
[50.4501,30.5234, 'Kiev, Ukraine, 02000'],
[32.2366945,-110.9456894, 'Babcock Building, 1717 E Speedway Blvd, Tucson, AZ 85719, USA'],
[44.9715569,-93.231866, 'Essex St SE, Minneapolis, MN 55455, USA'],
[49.9935,36.230383, 'Kharkiv, Kharkiv Oblast, Ukraine'],
[42.3423603,-7.8552788, 'Av. de Buenos Aires, 32004 Ourense, Orense, Spain'],
[9.7297203,79.9482992, 'Jaffna College, AB21, Sri Lanka'],
[42.5030209,-89.0295642, 'College St, Beloit, WI 53511, USA'],
[40.5382913,-78.3528584, 'Ucla Ln, Altoona, PA 16602, USA'],
[28.0282578,-82.3924269, 'Chicago Ave, Temple Terrace, FL 33617, USA'],
[30.5848529,31.4843221, 'Rd inside Zagazig University, Shaibet an Nakareyah, Markaz El-Zakazik, Ash Sharqia Governorate, Egypt'],
[33.428283,-111.750401, 'N Alberta, Mesa, AZ 85205, USA'],
[53.8931837,27.547338, 'Monument to Fallen Professors and Students of the Belarusian State University, Minsk, Belarus'],
[28.0735403,-82.4373589, 'University, FL, USA'],
[11.1705211,75.8735992, 'University Rd, Ramanattukara, Kerala, India'],
[45.4723514,9.1964401, 'Via del Vecchio Politecnico, 20121 Milano, Italy'],
[54.6871555,25.2796514, 'Vilnius, Lithuania'],
[20.593684,78.96288, 'India'],
[-33.8812733,18.6264694, 'Stellenbosch University, Cape Town, 7530, South Africa'],
[28.6777345,77.4504666, 'IMT Rd, Block 14, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002, India'],
[33.4238104,-111.8869146, 'Pennsylvania, Tempe, AZ 85281, USA'],
[31.3260152,75.5761829, 'Jalandhar, Punjab 144001, India'],
[36.8743583,-76.1745441, 'Virginia Tech Trail, Virginia Beach, VA 23455, USA'],
[33.4232051,-111.8879509, 'State Ave, Tempe, AZ 85281, USA'],
[22.2567635,-97.8345654, 'Guatemala, Cd Madero, Tamps., Mexico'],
[54.6871555,25.2796514, 'Vilnius, Lithuania'],
[1.2246216,19.7878159, 'Basankusu Airport (BSU), N22, Basankusu, Democratic Republic of the Congo'],
[51.165691,10.451526, 'Germany'],
[30.0742446,31.2765847, 'Internal Medicine, Ain Shams University, ممر خاص مستشفى الدمرداش، Al Waili, Cairo Governorate, Egypt'],
[-4.009976,-79.2085378, 'Colombia, Loja, Ecuador'],
[59.9342802,30.3350986, 'St Petersburg, Russia'],
[10.1345309,-85.4467445, 'Universidad Nacional, 150, Guanacaste, Nicoya, Costa Rica'],
[33.952602,-84.5499327, 'Marietta, GA, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[34.3020001,48.8145943, 'Malayer, Hamadan, Iran'],
[25.0254571,121.5273658, 'National Taiwan Normal University Main Campus I, Da’an District, Taipei City, Taiwan 106']
];
