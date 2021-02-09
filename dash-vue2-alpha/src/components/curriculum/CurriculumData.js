// this file stores the curriculum details
let curriculum_details = [
    {
        week: 1,
        name: 'Lemonade Stand',


        student_link: 'https://scratch.mit.edu/projects/392293538/editor/',
        teacher_link: 'https://scratch.mit.edu/projects/392339139/editor/',
        documentation: 'https://docs.google.com/document/d/1myUQSr9p_nidSYiDRLzR3SQxKBFRb8CyfOgTOQG8NTs/edit?usp=sharing'
    },
    {
        week: 2,
        name: 'Save the Lemonade',


        student_link: 'https://scratch.mit.edu/projects/395076094/editor/',
        teacher_link: 'https://scratch.mit.edu/projects/395061400/editor/',
        documentation: 'https://docs.google.com/document/d/1xzr88wAhpQrx8qtI1aXHauvCuZy9yeRivsZxiDSqTpQ/edit?usp=drive_web&ouid=105169288214493351359'
    },
]

function updateDetails(incoming_curriculum){
    curriculum_details.push(incoming_curriculum)
    console.log("from the curriculum data . js")
    console.log(curriculum_details)
}

export { curriculum_details , updateDetails}