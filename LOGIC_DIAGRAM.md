# Migraine Predictor Logic Summary

## Overview
This app uses a **predictive approach** to estimate migraine risk in the next 12 hours based on environmental data and personal factors.

## Risk Calculation Flowchart

```mermaid
flowchart TD
    Start([Start: User Inputs + Weather Data]) --> Factors[Calculate 18 Risk Factors<br/>Each scored 0-100]

    Factors --> F1[Environmental Factors]
    Factors --> F2[Personal Factors]
    Factors --> F3[Temporal Factors]

    F1 --> ENV1[Pressure - Weight: 0.17<br/>Highest impact]
    F1 --> ENV2[Humidity - Weight: 0.09]
    F1 --> ENV3[Temperature - Weight: 0.09]
    F1 --> ENV4[AQI - Weight: 0.06]
    F1 --> ENV5[Precipitation - Weight: 0.04]
    F1 --> ENV6[Wind - Weight: 0.02]

    F2 --> PER1[Sleep - Weight: 0.13<br/>Second highest]
    F2 --> PER2[Stress - Weight: 0.08]
    F2 --> PER3[Food - Weight: 0.05]
    F2 --> PER4[Hydration - Weight: 0.05]
    F2 --> PER5[Menstrual - Weight: 0.05]
    F2 --> PER6[Caffeine - Weight: 0.04]
    F2 --> PER7[Light Exposure - Weight: 0.03]
    F2 --> PER8[Alcohol - Weight: 0.03]
    F2 --> PER9[Exercise - Weight: 0.03]
    F2 --> PER10[Scents - Weight: 0.02]
    F2 --> PER11[Marijuana - Weight: 0.02]

    F3 --> TIME[Time of Day - Weight: 0.04]

    ENV1 --> Weighted[Apply Weights to Each Factor]
    ENV2 --> Weighted
    ENV3 --> Weighted
    ENV4 --> Weighted
    ENV5 --> Weighted
    ENV6 --> Weighted
    PER1 --> Weighted
    PER2 --> Weighted
    PER3 --> Weighted
    PER4 --> Weighted
    PER5 --> Weighted
    PER6 --> Weighted
    PER7 --> Weighted
    PER8 --> Weighted
    PER9 --> Weighted
    PER10 --> Weighted
    PER11 --> Weighted
    TIME --> Weighted

    Weighted --> Sum[Sum All Weighted Factors<br/>Base Index = Σ Factor × Weight]

    Sum --> Sensitivity[Apply Sensitivity Multiplier<br/>Based on Migraine Frequency]

    Sensitivity --> Freq1[Frequency 1 rare: 0.90×]
    Sensitivity --> Freq2[Frequency 2: 1.10×]
    Sensitivity --> Freq3[Frequency 3: 1.30×]
    Sensitivity --> Freq4[Frequency 4: 1.50×]
    Sensitivity --> Freq5[Frequency 5: 1.70×]
    Sensitivity --> Freq6[Frequency 6 extreme: 1.90×]

    Freq1 --> Final[Final Migraine Index<br/>Clamped to 0-100]
    Freq2 --> Final
    Freq3 --> Final
    Freq4 --> Final
    Freq5 --> Final
    Freq6 --> Final

    Final --> Risk{Risk Level?}

    Risk -->|0-25| Low[Low Risk<br/>Migraine unlikely in next 12hrs]
    Risk -->|26-50| Moderate[Moderate Risk<br/>Monitor symptoms]
    Risk -->|51-75| High[High Risk<br/>Migraine likely, take preventive measures]
    Risk -->|76-100| VeryHigh[Very High Risk<br/>Take medication if needed]

    Low --> End([End: Display Result])
    Moderate --> End
    High --> End
    VeryHigh --> End
```

## Formula

```
Migraine Index = [Σ (Factor_Risk × Factor_Weight)] × Sensitivity_Multiplier
```

Where:
- **Factor_Risk**: Individual risk score for each factor (0-100)
- **Factor_Weight**: Research-based weight for each factor (totaling 1.0)
- **Sensitivity_Multiplier**: `0.80 + (frequency × 0.20)` = Range from **1.0 to 2.0**

## Factor Weights (Total = 1.0)

### Environmental Factors (0.51)
- **Pressure**: 0.17 (most studied environmental factor)
- **Humidity**: 0.09 (28% increase in odds)
- **Temperature**: 0.09 (19-24% increase)
- **AQI**: 0.06 (3-5% per IQR)
- **Precipitation**: 0.04 (related to pressure changes)
- **Wind**: 0.02 (proxy for weather fronts)
- **Time**: 0.04 (circadian patterns)

### Personal Factors (0.49)
- **Sleep**: 0.13 (major personal trigger)
- **Stress**: 0.08 (cortisol pathway)
- **Food**: 0.05 (blood sugar trigger)
- **Hydration**: 0.05 (dehydration trigger)
- **Menstrual**: 0.05 (hormonal fluctuations)
- **Caffeine**: 0.04 (withdrawal/overuse)
- **Light Exposure**: 0.03 (photosensitivity)
- **Alcohol**: 0.03 (vasodilation/dehydration)
  - **+15 risk** if contains red wine (histamines, tyramine, tannins)
  - **+12 risk** if contains beer (histamines, tyramine)
- **Exercise**: 0.03 (helps or triggers)
- **Scents**: 0.02 (trigeminal trigger)
- **Marijuana**: 0.02 (complex relationship)

## Sensitivity Multiplier

Based on migraine frequency (1-6 scale):

| Frequency | Description | Multiplier | Effect |
|-----------|-------------|------------|--------|
| 1 | Rare (< 1/month) | 1.0× | Baseline (no adjustment) |
| 2 | Occasional (1-3/month) | 1.2× | +20% baseline |
| 3 | Frequent (4-7/month) | 1.4× | +40% baseline |
| 4 | Very Frequent (8-10/month) | 1.6× | +60% baseline |
| 5 | Chronic (11-14/month) | 1.8× | +80% baseline |
| 6 | Extreme (15+/month) | 2.0× | +100% baseline (2x) |

## Predictive vs Diagnostic

### Predictive (This App)
- Estimates risk **in the next 12 hours**
- Uses current environmental conditions + personal factors
- Helps users take **preventive action**
- Based on research correlations, not diagnostic criteria

### Diagnostic (Medical)
- Diagnoses an **ongoing migraine**
- Uses symptoms, duration, medical history
- Performed by healthcare professionals
- Based on clinical diagnostic criteria

## Key Features

1. **Real-time Weather Integration**: Fetches current and historical weather data
2. **Pressure Change Tracking**: Monitors 24-hour pressure drops (highly triggering)
3. **Temperature Change Tracking**: Rapid temperature changes increase risk
4. **Regular Consumer Logic**: Tracks usual intake vs today's intake for caffeine, alcohol, exercise, and marijuana
5. **Menstrual Cycle Tracking**: Highest risk 2 days before through first 3 days of menstruation
6. **Advanced Mode**: Optional detailed inputs for power users

## Special Notes

- **Red Wine & Beer**: Classified as higher-risk alcohol types due to histamines and tyramine
- **Pressure Changes**: Rapid drops are more triggering than stable low pressure
- **Regular Consumers**: Withdrawal (less than usual intake) can trigger migraines
- **Caffeine Calculator**: Optional detailed breakdown (coffee, energy drinks, tea, medications)
