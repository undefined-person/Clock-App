export const getGreeting = (hour: number) => {
  if (hour >= 5 && hour < 12) {
    return 'Good morning'
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon'
  }
  return 'Good evening'
}
