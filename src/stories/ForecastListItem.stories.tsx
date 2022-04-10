import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ForecastListItem } from "components/ForecastList/ForecastListItem";
import { UnitsSystem } from "api/weather/types";

export default {
  title: "Forecast list item",
  component: ForecastListItem,
} as ComponentMeta<typeof ForecastListItem>;

const Template: ComponentStory<typeof ForecastListItem> = (args) => (
  <ForecastListItem {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  unitSystem: UnitsSystem.metric,
  temperature: 10,
  icon: "04d",
  speed: 2,
  humidity: 60,
  pressure: 1000,
};
