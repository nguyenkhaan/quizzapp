
export const TOTAL_QUESTIONS = 10 

export const ANSWER_CHOICE = (index : number) => {
    switch (index) 
    {
        case 1: return 'A' 
        case 2: return 'B' 
        case 3: return 'C' 
        case 4: return 'D' 
        default : return 'A' 
    }
}