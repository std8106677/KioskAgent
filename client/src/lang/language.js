import LocalizedStrings from 'react-localization';

export let Locales = new LocalizedStrings({
  en: {
    common: {
      取消: "Cancel",
      確定: "OK",
    },
    login: {
      帳號: "Account",
      密碼: "Password",
      登入: "Login",
      店看看ViuKiosk登錄: "ViuKiosk Login",
    },
    menu: {

    },
  },
  cht: {
    common: {
      取消: "取消",
      確定: "確定",
    },
    login: {
      帳號: "帳號",
      密碼: "密碼",
      登入: "登入",
      店看看ViuKiosk登錄: "店看看ViuKiosk登錄",
    },
    menu: {
      修改密碼: "修改密碼",
      門店配置: "門店配置",
      上傳廣告圖片: "上傳廣告圖片",
      上傳品項圖片: "上傳品項圖片",
    },
  },
  cn: {
    common: {
      取消: "取消",
      確定: "确定",
    },
    login: {
      帳號: "帐号",
      密碼: "密码",
      登入: "登入",
      店看看ViuKiosk登錄: "店看看ViuKiosk登录",
    },
    menu: {
      修改密碼: "修改密码",
      門店配置: "门店配置",
      上傳廣告圖片: "上传广告图片",
      上傳品項圖片: "上传品项图片",
    },
  }
});


export function setLanguage(lang) {
  LocalizedStrings.setLanguage(lang);
}
