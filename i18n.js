const messages = {
    tw: {
        uploadBtn: "上傳JSON",
        displayConstOptions: {
            showConstant: "顯示歌曲定數",
            showLevel: "顯示歌曲等級",
            showBoth: "顯示歌曲定數與等級",
        }
    },
    en: {
        uploadBtn: "Upload JSON",
        displayConstOptions: {
            showConstant: "Show Song Constant",
            showLevel: "Show Song Level",
            showBoth: "Show Both",
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const i18n = new VueI18n({
        locale: 'tw',
        messages: messages,
    })

    new Vue({
        i18n,
    }).$mount('#app')
})
