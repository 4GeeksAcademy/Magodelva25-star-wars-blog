
export const getPeopleImageClass = (name) => {
    if (name === "Luke Skywalker" ) return "https://www.lafosadelrancor.com/wp-content/uploads/2021/02/luke-retorno-de-jedi-lista-cortada_widelg-678x381.jpg";
    if (name === "C-3PO" ) return "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536";
    if (name === "R2-D2") return "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536";
    if (name === "Darth Vader") return "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720";
    if (name === "Leia Organa") return "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786";
    if (name === "Owen Lars") return "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593";
    if (name === "Beru Whitesun lars") return "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527";
    if (name === "R5-D4") return "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666";
    if (name === "Biggs Darklighter") return "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Obi-Wan Kenobi") return "https://cdn.eldestapeweb.com/eldestape/122021/1640215933245/Obi-Wan-Kenobi.jpeg";
    return "default-card-content";
};

export const getFilmImageClass = (title) => {
    if (title === "A New Hope") return "https://lumiere-a.akamaihd.net/v1/images/EP4_POS_2_D-RESIZED_f977074a.jpeg";
    if (title === "The Empire Strikes Back") return "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg";
    if (title === "Return of the Jedi") return "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg";
    if (title === "The Phantom Menace") return "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg";
    if (title === "Attack of the Clones") return "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg";
    if (title === "Revenge of the Sith") return "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg";
    return "default-card-content";
};

export const getPlanetsImageClass = (name) => {
    if (name === "Tatooine" ) return "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-obj7u0_7c60f729.jpeg?region=0%2C0%2C1200%2C513";
    if (name === "Alderaan" ) return "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720";
    if (name === "Yavin IV") return "https://lumiere-a.akamaihd.net/v1/images/rebel-massassi-outpost-main_6f7094bd.jpeg?region=0%2C0%2C1200%2C675";
    if (name === "Hoth") return "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675";
    if (name === "Dagobah") return "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711";
    if (name === "Bespin") return "https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Endor") return "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Naboo") return "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Coruscant") return "https://lumiere-a.akamaihd.net/v1/images/coruscant-main_d2fad5f2.jpeg?region=245%2C0%2C1430%2C804";
    if (name === "Kamino") return "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542";
    return "default-card-content";
};

export const getVehiclesImageClass = (name) => {
    if (name === "Sand Crawler" ) return "https://lumiere-a.akamaihd.net/v1/images/sandcrawler-main_eb1b036b.jpeg?region=251%2C20%2C865%2C487";
    if (name === "X-34 landspeeder" ) return "https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819";
    if (name === "T-16 skyhopper") return "https://static.wikia.nocookie.net/esstarwars/images/f/f2/T-16_skyhopper_-_SW_20.png/revision/latest/thumbnail/width/360/height/360?cb=20181201201037";
    if (name === "TIE/LN starfighter") return "https://diceandcardboard.com/content/images/size/w2000/2022/06/7D447526-4083-44FC-BAAD-FEBA5A3872B0.jpeg";
    if (name === "Snowspeeder") return "https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C211%2C2048%2C1154";
    if (name === "AT-AT") return "https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=214%2C19%2C1270%2C716";
    if (name === "TIE bomber") return "https://static.wikia.nocookie.net/disney/images/1/17/TIE_Bomber_BF2.png/revision/latest/scale-to-width-down/1000?cb=20170906175715";
    if (name === "AT-ST") return "https://lumiere-a.akamaihd.net/v1/images/e6d_ia_5724_a150e6d4.jpeg?region=124%2C0%2C1424%2C802";
    if (name === "Storm IV Twin-Pod cloud car") return "https://static.wikia.nocookie.net/starwars/images/5/5f/StormIV_btm.jpg/revision/latest?cb=20080320122615";
    if (name === "Sail barge") return "https://www.brickfanatics.com/wp-content/webp-express/webp-images/uploads/2023/03/Star-Wars-Return-of-the-Jedi-Jabbas-Sail-Barge-800x445.jpg.webp";
    return "default-card-content";
};

export const getStarshipsImageClass = (name) => {
    if (name === "CR90 corvette" ) return "https://lumiere-a.akamaihd.net/v1/images/hammerhead-corvette-rogue-update_453ce60b.jpeg?region=154%2C0%2C892%2C502";
    if (name === "Star Destroyer" ) return "https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900";
    if (name === "Sentinel-class landing craft") return "https://i.redd.it/75vpe9tu23nb1.jpg";
    if (name === "Death Star") return "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900";
    if (name === "Y-wing") return "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864";
    if (name === "Millennium Falcon") return "https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720";
    if (name === "TIE Advanced x1") return "https://lumiere-a.akamaihd.net/v1/images/image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080";
    if (name === "Executor") return "https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845";
    if (name === "X-wing") return "https://lumiere-a.akamaihd.net/v1/images/resistance-x-wing_9433981f.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Rebel transport") return "https://lumiere-a.akamaihd.net/v1/images/gr-75-medium-transport_cd04862d.jpeg?region=15%2C0%2C770%2C433";
    return "default-card-content";
};

export const getSpeciesImageClass = (name) => {
    if (name === "Human" ) return "https://lumiere-a.akamaihd.net/v1/images/lando-main_a207290e.jpeg?region=147%2C0%2C951%2C536";
    if (name === "Droid" ) return "https://lumiere-a.akamaihd.net/v1/images/databank_battledroid_01_169_1524f145.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Wookie") return "https://lumiere-a.akamaihd.net/v1/images/wookiees-main-b_fc850c5b.jpeg?region=8%2C0%2C1543%2C868";
    if (name === "Rodian") return "https://lumiere-a.akamaihd.net/v1/images/databank_greedo_01_169_3e4b96ef.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Hutt") return "https://lumiere-a.akamaihd.net/v1/images/databank_hutt_01_169_5d0535d2.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Yoda's species") return "https://lumiere-a.akamaihd.net/v1/images/databank_yaddle_01_169_3cfd7068.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Trandoshan") return "https://lumiere-a.akamaihd.net/v1/images/trandoshian-main_19804be7.jpeg?region=0%2C67%2C1280%2C720";
    if (name === "Mon Calamari") return "https://lumiere-a.akamaihd.net/v1/images/admiral-raddus-main_33194c80.jpeg?region=0%2C0%2C1560%2C878";
    if (name === "Ewok") return "https://lumiere-a.akamaihd.net/v1/images/databank_wickettwwarrick_01_169_86d1210c.jpeg?region=0%2C3%2C1560%2C780";
    if (name === "Sullustan") return "https://lumiere-a.akamaihd.net/v1/images/databank_sullustan_01_169_01e4c3e0.jpeg?region=0%2C0%2C1560%2C878";
    return "default-card-content";
};