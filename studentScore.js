let score=67;
function calculateGrade(score) {
    switch(score)
    {
    case score>90:
        console.log("A grade");
        break;
        case score>70:
            console.log("B grade");
            break;
            case score>40:
        console.log("C grade");
        break; 
        default:
            console.log("student passed"); 
            break;  
    }
    
}
calculateGrade(score);