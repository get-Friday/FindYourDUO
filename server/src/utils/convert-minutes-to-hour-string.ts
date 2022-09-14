export function convertMinutesToHourString(minutesDb: number){
    const hours = Math.floor(minutesDb / 60)
    const minutes = minutesDb % 60 
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}
