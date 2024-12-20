const themeListeners = []

App({
    onLaunch: function () {
        console.log('App Launch')
        wx.onThemeChange(({ theme }) => {
            this.themeChanged(theme)
        })
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    themeChanged(theme) {
        this.globalData.theme = theme
        themeListeners.forEach((listener) => {
            listener(theme)
        })
    },
    watchThemeChange(listener) {
        if (themeListeners.indexOf(listener) < 0) {
            themeListeners.push(listener)
        }
    },
    unWatchThemeChange(listener) {
        const index = themeListeners.indexOf(listener)
        if (index > -1) {
            themeListeners.splice(index, 1)
        }
    },
    globalData: {
        hasLogin: false,
        theme: wx.getAppBaseInfo().theme,
        GRID_DEMO_URL: '/example/index',
        iconTabbar: require('/example/images/icon_tabbar.png').default
    }
})
