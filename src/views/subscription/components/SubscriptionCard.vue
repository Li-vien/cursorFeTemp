<template>
  <div class="subscription-card">
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <div class="price-container">
        <div class="price">
          <span class="currency">$</span>
          <span class="amount">{{ price }}</span>
        </div>
        <span class="period" v-if="price !== 'Custom'">/month</span>
      </div>
      <p class="card-description">Level up productivity and creativity with</p>
    </div>
    
    <button 
      class="card-button" 
      :class="{ 'primary': buttonType === 'primary', 'current': isCurrentPlan }"
    >
      {{ buttonText }}
    </button>
    
    <div class="points-section" v-if="!hidePoints">
      <div class="points-container">
        <div class="points-icon">
          <img src="@/assets/images/subscription/points-icon.png" alt="Points" />
        </div>
        <span class="points-text">{{ points }} points monthly</span>
      </div>
      <p class="video-time">~ {{ videoTime }} video</p>
    </div>
    
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
        <span 
          class="feature-text"
          :class="{ 'disabled': feature.disabled }"
        >
          {{ feature.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  isCurrentPlan: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: 'Subscribe'
  },
  buttonType: {
    type: String,
    default: 'default'
  },
  features: {
    type: Array,
    default: () => []
  },
  points: {
    type: String,
    default: '0'
  },
  videoTime: {
    type: String,
    default: '0 mins'
  },
  hidePoints: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.subscription-card {
  background-color: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.3s ease;
  height: 100%;
  max-width: 308px;
}

.subscription-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-title {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #2C2C2C;
  margin: 0;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 4px;
}

.price {
  display: flex;
  align-items: center;
}

.currency {
  font-family: 'SF Pro', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2C2C2C;
  margin-right: 2px;
  align-self: flex-start;
  margin-top: 4px;
}

.amount {
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #2C2C2C;
}

.period {
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2C2C2C;
  align-self: flex-end;
  margin-bottom: 8px;
}

.card-description {
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2C2C2C;
  margin: 0;
}

.card-button {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  padding: 11px 0;
  border-radius: 100px;
  border: 1px solid #DDDDDD;
  background-color: transparent;
  color: #2C2C2C;
  cursor: pointer;
  transition: all 0.2s ease;
}

.card-button.primary {
  background-color: #2C2C2C;
  color: #FFFFFF;
  border: none;
}

.card-button.current {
  border: 1px solid #DDDDDD;
  background-color: transparent;
  color: #2C2C2C;
  cursor: default;
}

.card-button:hover:not(.current) {
  opacity: 0.9;
}

.points-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.points-container {
  display: flex;
  align-items: center;
  gap: 6px;
}

.points-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.points-icon img {
  width: 15px;
  height: 15px;
}

.points-text {
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2C2C2C;
}

.video-time {
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #8B8B8B;
  margin: 0;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
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

.feature-text.disabled {
  text-decoration: line-through;
  opacity: 0.7;
}
</style> 