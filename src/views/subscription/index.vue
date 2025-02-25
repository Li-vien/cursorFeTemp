<template>
  <div class="subscription-page">
    <div class="subscription-header">
      <h1 class="title">Subscription</h1>
    </div>

    <div class="subscription-content">
      <div class="subscription-tabs">
        <button 
          class="tab-button" 
          :class="{ active: billingCycle === 'monthly' }"
          @click="toggleBillingCycle('monthly')"
        >
          Monthly
        </button>
        <button 
          class="tab-button"
          :class="{ active: billingCycle === 'annual' }"
          @click="toggleBillingCycle('annual')"
        >
          Annual
        </button>
      </div>

      <div class="subscription-cards">
        <div 
          v-for="plan in plans" 
          :key="plan.name"
          class="subscription-card"
        >
          <div class="card-header">
            <h3 :class="{ 'enterprise-title': plan.name === 'Enterprise' }">{{ plan.name }}</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">{{ plan.price }}</span>
              <span class="period">/ month</span>
            </div>
            <p class="description">{{ plan.description }}</p>
          </div>

          <button 
            :class="[
              'action-button',
              plan.isCurrent ? 'current-plan' : 'subscribe-button'
            ]"
          >
            {{ plan.isCurrent ? 'Current plan' : plan.name === 'Enterprise' ? 'Let\'s chat' : 'Subscribe' }}
          </button>

          <div class="points-info">
            <div class="points">
              <i class="points-icon"></i>
              <span>{{ plan.points }} {{ plan.points !== '--' ? 'points monthly' : '' }}</span>
            </div>
            <span class="video-duration">{{ plan.videoDuration }}</span>
          </div>

          <div class="features-list">
            <div 
              v-for="(feature, index) in plan.features" 
              :key="index"
              class="feature-item"
            >
              <i class="success-icon"></i>
              <span>{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="need-more">Need more than that?</h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const billingCycle = ref('monthly')

const plans = ref([
  {
    name: 'Free',
    price: 0,
    description: 'Level up productivity and creativity with',
    points: '20',
    videoDuration: '~ 2 mins video',
    isCurrent: true,
    features: [
      'Watermark remove',
      '2 video minutes',
      '1 custom avatar',
      '1 clone voice',
      '30 secs max per video length',
      'Normal speed',
      '1 concurrent generations'
    ]
  },
  {
    name: 'Standard',
    price: 19,
    description: 'Level up productivity and creativity with',
    points: '720',
    videoDuration: '~ 60 mins video',
    features: [
      'Watermark remove',
      '60 video minutes',
      '5 custom avatars count',
      '5 clone voice',
      '5 minutes max per video length',
      'Fast speed',
      '3 concurrent generations'
    ]
  },
  {
    name: 'Unlimited',
    price: 89,
    description: 'Level up productivity and creativity with',
    points: 'Unlimited',
    videoDuration: '~ 5 hours video',
    features: [
      'Watermark remove',
      'Unlimited video generation',
      'Unlimited custom avatar count',
      'Unlimited clone voice',
      '5 minutes max per video length',
      'High fast speed',
      '5 concurrent generations'
    ]
  },
  {
    name: 'Enterprise',
    price: '--',
    description: 'Level up productivity and creativity with',
    points: '--',
    videoDuration: '--',
    features: [
      'Everything in Scale',
      'API Support',
      'Max Video Duration',
      'Customizable 4K-HDR professional avatar',
      'Enterprise security & privacy',
      'Custom'
    ]
  }
])

function toggleBillingCycle(cycle) {
  billingCycle.value = cycle
}
</script>

<style lang="less" scoped>
@import '@/assets/style/variables.less';
@import '@/assets/style/mixins.less';

.subscription-page {
  padding: @spacing-xl;
  max-width: 1280px;
  margin: 0 auto;
}

.subscription-header {
  margin-bottom: @spacing-xl;

  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 25.14px;
    color: @primary-color;
    margin-bottom: @spacing-md;
  }
}

.subscription-content {
  .flex-column();
  align-items: center;

  .subscription-tabs {
    display: flex;
    gap: @spacing-sm;
    background: @background-gray;
    border-radius: @border-radius-circle;
    padding: 2px;
    margin-bottom: @spacing-xl;

    .tab-button {
      padding: 9px @spacing-md;
      width: 120px;
      height: 35px;
      border: none;
      border-radius: @border-radius-circle;
      font-weight: 700;
      font-size: 14px;
      line-height: 17.6px;
      color: @primary-color;
      background: transparent;
      cursor: pointer;
      transition: @transition-normal;

      &.active {
        background: @background-light;
      }
    }
  }

  .subscription-cards {
    display: grid;
    grid-template-columns: repeat(4, 308px);
    gap: @spacing-lg;
    margin: 0 auto @spacing-xl;
    width: fit-content;

    .subscription-card {
      border: 1px solid @border-color;
      border-radius: @border-radius-md;
      padding: @spacing-xl;
      .flex-column();
      gap: @spacing-xl;
      width: 308px;
      transition: @transition-normal;

      &:hover {
        transform: translateY(-4px);
        box-shadow: @box-shadow-light;
      }

      .card-header {
        .flex-column();
        gap: @spacing-md;

        h3 {
          font-weight: 700;
          font-size: 16px;
          line-height: 20.11px;
          color: @primary-color;
        }

        .enterprise-title {
          font-size: 24px !important;
          line-height: 30.17px !important;
        }

        .price {
          display: flex;
          align-items: center;
          gap: 4px;

          .currency {
            font-size: 20px;
            line-height: 23.87px;
            color: @primary-color;
          }

          .amount {
            font-weight: 700;
            font-size: 40px;
            line-height: 48px;
            color: @primary-color;
          }

          .period {
            font-weight: 500;
            font-size: 14px;
            line-height: 16.71px;
            color: @primary-color;
            margin-top: 28.5px;
          }
        }

        .description {
          font-size: 14px;
          line-height: 14px;
          color: @primary-color;
        }
      }

      .action-button {
        .flex-center();
        gap: 12px;
        padding: 11px 0;
        border-radius: @border-radius-circle;
        font-weight: 700;
        font-size: 14px;
        line-height: 17.6px;
        cursor: pointer;
        transition: @transition-normal;
        width: 100%;

        &.current-plan {
          .secondary-button();
          padding: 11px 0;
        }

        &.subscribe-button {
          .primary-button();
          padding: 11px 0;
        }
      }

      .points-info {
        .flex-column();
        gap: @spacing-sm;

        .points {
          display: flex;
          align-items: center;
          gap: 6px;

          span {
            font-weight: 500;
            font-size: 16px;
            line-height: 19.09px;
            color: @primary-color;
          }
        }

        .video-duration {
          font-size: 14px;
          line-height: 14px;
          color: @secondary-text-color;
        }
      }

      .features-list {
        .flex-column();
        gap: @spacing-md;

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;

          span {
            font-size: 14px;
            line-height: 14px;
            color: @secondary-text-color;
          }
        }
      }
    }
  }

  .need-more {
    font-weight: 700;
    font-size: 24px;
    line-height: 28.64px;
    color: @primary-color;
    text-align: center;
  }
}

.success-icon {
  width: 20px;
  height: 20px;
  background-image: url('@/assets/icons/success.svg');
  background-repeat: no-repeat;
  background-position: center;
}

.points-icon {
  width: 20px;
  height: 20px;
  background-image: url('@/assets/icons/points.svg');
  background-repeat: no-repeat;
  background-position: center;
}

// 响应式样式
@media (max-width: @screen-lg) {
  .subscription-content {
    .subscription-cards {
      grid-template-columns: repeat(2, 308px);
    }
  }
}

@media (max-width: @screen-sm) {
  .subscription-content {
    .subscription-cards {
      grid-template-columns: 308px;
    }
  }
  
  .subscription-page {
    padding: @spacing-md;
  }
}
</style>
