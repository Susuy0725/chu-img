const messages = {
    tw: {
        uploadBtn: "上傳JSON",
        displayConstOptions: {
            showConstant: "顯示歌曲定數",
            showLevel: "顯示歌曲等級",
            showBoth: "顯示歌曲定數與等級",
        },
        picQualityOptions: {
            midQuality: "中等品質",
            highQuality: "高等品質",
        },
        regenerateBtn: "重新生成圖片",
    },
    ch: { // Chinese Simplified
        uploadBtn: "上传JSON",
        displayConstOptions: {
            showConstant: "显示歌曲定数",
            showLevel: "显示歌曲等级",
            showBoth: "显示歌曲定数与等级",
        },
        picQualityOptions: {
            midQuality: "中等品質",
            highQuality: "高等品質",
        },
        regenerateBtn: "重新生成图片",
    },
    en: {
        uploadBtn: "Upload JSON",
        displayConstOptions: {
            showConstant: "Show Song Constant",
            showLevel: "Show Song Level",
            showBoth: "Show Both",
        },
        picQualityOptions: {
            midQuality: "Medium Quality",
            highQuality: "High Quality",
        },
        regenerateBtn: "Regenerate Image",
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
