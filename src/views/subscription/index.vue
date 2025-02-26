<template>
  <div class="subscription-page">
    <div class="subscription-container">
      <h1 class="subscription-title">Subscription</h1>
      
      <div class="subscription-tabs">
        <div class="tab-container">
          <div class="tab active">
            <span>Monthly</span>
          </div>
          <div class="tab">
            <span>Annual</span>
          </div>
        </div>
      </div>
      
      <div class="subscription-cards">
        <SubscriptionCard 
          title="Free" 
          price="0" 
          isCurrentPlan 
          buttonText="Current plan"
          :features="freeFeatures"
          points="20"
          videoTime="2 mins"
        />
        
        <SubscriptionCard 
          title="Standard" 
          price="19" 
          buttonText="Subscribe"
          :features="standardFeatures"
          points="720"
          videoTime="60 mins"
          buttonType="primary"
        />
        
        <SubscriptionCard 
          title="Unlimited" 
          price="89" 
          buttonText="Subscribe"
          :features="unlimitedFeatures"
          points="Unlimited"
          videoTime="5 hours"
          buttonType="primary"
        />
        
        <EnterpriseCard :features="enterpriseFeatures" />
      </div>
      
      <div class="more-options">
        <h2 class="more-title">Need more than that?</h2>
        <p class="more-description">Contact our sales team for custom enterprise solutions</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubscriptionCard from './components/SubscriptionCard.vue';
import EnterpriseCard from './components/EnterpriseCard.vue';

defineOptions({
  name: 'SubscriptionView'
});

const freeFeatures = [
  { text: 'Watermark remove', disabled: true },
  { text: '2 video minutes', disabled: false },
  { text: '1 custom avatar', disabled: true },
  { text: '30 secs max per video length', disabled: false },
  { text: 'Normal speed', disabled: false },
  { text: '1 concurrent generations', disabled: false },
];

const standardFeatures = [
  { text: 'Watermark remove', disabled: false },
  { text: '60 video minutes', disabled: false },
  { text: '5 custom avatars count', disabled: false },
  { text: '5 minutes max per video length', disabled: false },
  { text: 'Fast speed', disabled: false },
  { text: '3 concurrent generations', disabled: false },
];

const unlimitedFeatures = [
  { text: 'Watermark remove', disabled: false },
  { text: 'Unlimited video generation', disabled: false },
  { text: 'Unlimited custom avatar count', disabled: false },
  { text: '5 minutes max per video length', disabled: false },
  { text: 'High fast speed', disabled: false },
  { text: '5 concurrent generations', disabled: false },
];

const enterpriseFeatures = [
  { text: 'Everything in Scale', disabled: false },
  { text: 'API Support', disabled: false },
  { text: 'Max Video Duration', disabled: false },
  { text: 'Customizable 4K-HDR professional avatar', disabled: false },
  { text: 'Enterprise security & privacy', disabled: false },
];
</script>

<style scoped>
.subscription-page {
  padding: 40px 20px;
  background-color: #F9F9F9;
  min-height: 100vh;
}

.subscription-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subscription-title {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 32px;
  align-self: flex-start;
}

.subscription-tabs {
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.tab-container {
  display: flex;
  background-color: #EBEBEB;
  border-radius: 100px;
  padding: 2px;
  width: 244px;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 9px 16px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab span {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #2C2C2C;
}

.tab.active {
  background-color: #FFFFFF;
}

.subscription-cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(280px, 308px));
  gap: 16px;
  width: 100%;
  margin-bottom: 48px;
  justify-content: center;
}

.more-options {
  text-align: center;
  margin-top: 24px;
}

.more-title {
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #2C2C2C;
  margin-bottom: 16px;
}

.more-description {
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8B8B8B;
}

@media (max-width: 1200px) {
  .subscription-cards {
    grid-template-columns: repeat(2, minmax(280px, 308px));
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .subscription-cards {
    grid-template-columns: minmax(280px, 308px);
    gap: 16px;
  }
}
</style> 