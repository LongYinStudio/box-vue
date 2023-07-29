<template>
  <div class="card">
    <div class="header">
      <slot name="title"></slot><slot name="right"></slot>
    </div>
    <div class="body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  .header {
    color: #008c8c;
    padding: 16px;
    text-align: left;
    font-size: 18px;
    border-bottom: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .body {
    padding: 10px;
  }
}
</style>
