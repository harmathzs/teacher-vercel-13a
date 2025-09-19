// api/teachers.js

var global = {
    teachers: [
        {
            name: 'Gipsz Jakab',
            hisClass: '9/A',
            favorite: false,
        },
        {
            name: 'Kolompár Dzsoki',
            hisClass: '18/C',
            favorite: true,
        },        
    ],
    //favoriteTeacherIdx: null,
}
//export global

export default async function handler(req, res) {
    res.status(200).json(global.teachers)
}
