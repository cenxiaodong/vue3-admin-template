import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import dbStorage from '@/utils/dbStorage'
import setting from '@/setting'
import Color from 'color'

export const useGlobalConfigStore = defineStore(
  'globalConfig',
  () => {
    // 菜单栏折叠字段
    const collapsed = ref(false)
    // 主题颜色
    const appThemeColor = ref(dbStorage.get('appConfg', 'appThemeColor') || setting.theme.color)

    // 切换状态
    function toggle() {
      collapsed.value = !collapsed.value
    }
    // 初始化主题颜色
    const initThenemeColor = () => {
      let newThemeColor = appThemeColor.value
      const rootStyle = document.documentElement.style
      rootStyle.setProperty(`--admin-color-primary`, newThemeColor)
      for (let i = 1; i < 10; i++) {
        if (i % 2 != 0) {
          newThemeColor = Color(newThemeColor).alpha(i * 0.1)
          rootStyle.setProperty(`--admin-color-primary-dark-${i}`, newThemeColor)
        }
      }
    }
    // 切换主题颜色
    const toggleThemeColor = (color) => {
      dbStorage.set('appConfg', 'appThemeColor', color)
      appThemeColor.value = color
      let newThemeColor = color
      const rootStyle = document.documentElement.style
      rootStyle.setProperty(`--admin-color-primary`, newThemeColor)
      for (let i = 1; i < 10; i++) {
        if (i % 2 != 0) {
          newThemeColor = Color(newThemeColor).alpha(i * 0.1)
          rootStyle.setProperty(`--admin-color-primary-dark-${i}`, newThemeColor)
        }
      }
    }
    return {
      collapsed,
      appThemeColor,
      toggle,
      toggleThemeColor,
      initThenemeColor
    }
  },
  {
    // persist: true
  }
)
