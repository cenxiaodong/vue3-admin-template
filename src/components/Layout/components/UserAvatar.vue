<script setup>
import { AntdIcon } from '@/utils/antdIcon'
</script>
<template>
  <a-dropdown>
    <a-avatar style="background-color: #87d068">
      <template #icon>
        <AntdIcon icon="UserOutlined"></AntdIcon>
      </template>
    </a-avatar>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <div class="avatar-menu">
            <AntdIcon icon="SettingOutlined"></AntdIcon>
            <span>设置</span>
          </div>
        </a-menu-item>
        <a-menu-item>
          <div class="avatar-menu">
            <AntdIcon icon="LogoutOutlined"></AntdIcon>
            <span>退出登录</span>
          </div>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<style lang="scss" scoped>
.avatar-menu {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
