export const formatDate = (dateStr: Date) => {
    return dateStr.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })

}