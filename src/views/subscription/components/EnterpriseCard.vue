<template>
  <div class="enterprise-card">
    <h3 class="enterprise-title">Enterprise</h3>
    
    <div class="more-title">Need more than that?</div>
    
    <button class="enterprise-button">Let's chat</button>
    
    <div class="features-list">
      <div 
        v-for="(feature, index) in features" 
        :key="index"
        class="feature-item"
      >
        <img 
          src="@/assets/images/subscription/check-icon.png" 
          alt="Check" 
          class="feature-icon"
        />
        <span class="feature-text">{{ feature.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    default: () => [
      { text: 'Everything in Scale' },
      { text: 'API Support' },
      { text: 'Max Video Duration' },
      { text: 'Customizable 4K-HDR professional avatar' },
      { text: 'Enterprise security & privacy' }
    ]
  }
});
</script>

<style scoped>
.enterprise-card {
  background-color: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  height: 100%;
  max-width: 308px;
  width: 100%;
  transition: all 0.3s ease;
}

.enterprise-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transform: translateY(-4px);
}

.enterprise-title {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #2C2C2C;
  margin: 0 0 24px 0;
}

.more-title {
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #2C2C2C;
  margin: 24px 0 0;
}

.enterprise-button {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  padding: 11px 0;
  border-radius: 100px;
  background-color: #2C2C2C;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 51px 0;
}

.enterprise-button:hover {
  opacity: 0.9;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-icon {
  width: 16px;
  height: 16px;
}

.feature-text {
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #8B8B8B;
}
</style> 