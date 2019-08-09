import DefaultTheme from 'react-dates/lib/theme/DefaultTheme'

export default {
    reactDates : {
        ...DefaultTheme.reactDates,
        color: {
            ...DefaultTheme.reactDates.color,
            highlighted: {
                backgroundColor: '#82E0AA',
                backgroundColor_active: '#58D68D',
                backgroundColor_hover: '#58D68D',
                color: '#186A3B',
                color_active: '#186A3B',
                color_hover: '#186A3B',
            }
        }
    }
}
