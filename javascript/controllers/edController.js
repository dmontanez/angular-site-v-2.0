   var institutions = [
        {
            name: 'Pennsylvania State University',
            degree: 'M.E.',
            major: 'Software Engineering',
            minor: '',
            start: 1346482800000,
            end: 1408086000000,
            courses: [
                'Requirements Engineering',
                'Software System Design (UML)',
                'Pattern Oriented Design',
                'Database Design',
                'Software System Architecture',
                'Enterprise Integration',
                'Applied Human Computer Interaction',
                'Program Understanding',
                'Web Security and Privacy',
                'Software Project Management',
                'Software Testing',
                'Advanced Software Engineering Studio'
            ],
            images: [
                "templates/pages/education/images/ed_psu_logo.png",
                "templates/pages/education/images/lgo_psu.png",
                "templates/pages/education/images/sl_psu.png"
            ]
        },
        {
            name: 'California State University Bakersfield',
            degree: 'B.S.',
            major: 'Computer Science',
            minor: 'Philosophy',
            start: 1126594800000,
            end: 1308121200000,
            courses: [
                'Web Design',
                'Advanced Computer Networks',
                'Database Systems',
                'Software Engineering',
                'Beginning Artificial Intelligence',
                'Advanced Artificial Intelligence',
                'Programming Languages',
                'Advanced Computer Srchitecture',
                'Methods in Applied Statistics',
                'Data Analysis'
            ],
            images: [
                "templates/pages/education/images/ed_csub_logo.png",
                "templates/pages/education/images/lgo_csub.png",
                "templates/pages/education/images/sl_csub.png"
            ]
        }
    ];

angular.module('myApp')
    .controller('edCtrl', function() {
        this.schools = institutions;
        navDisplay();
});