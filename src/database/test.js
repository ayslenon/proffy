const Database = require('./db.js')
const createProffy = require('./createProffy.js')

Database.then(async (db)=>{
    proffyValue = {
        name: "joao kleber",
        avatar: "",
        whatsapp: "1241124",
        bio: "asdasd",
    }

    classValue = {
        subject: 5,
        cost: "10",

    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    //await createProffy(db,{proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffys_id = "1";
    `)
    // console.log(selectClassesAndProffys)
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "500"
        AND class_schedule.time_to > "1200"
    `)

    // console.log(selectClassesSchedules)
})