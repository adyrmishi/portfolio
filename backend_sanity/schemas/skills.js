export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'skill',
            title: 'Skill',
            type: 'string'
        },
        {
            name: 'experience',
            title: 'Experience',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ]
}