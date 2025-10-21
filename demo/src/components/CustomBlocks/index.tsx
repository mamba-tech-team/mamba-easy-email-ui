import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager } from 'easy-email-extensions';
import { CustomBlocksType } from './constants';
import { Panel as ProductRecommendationPanel, ProductRecommendation } from './ProductRecommendation';
import { Panel as MyFirstBlockPanel, MyFirstBlock } from './MyFirstBlock';
import { Panel as CustomHtmlPanel, CustomHtml } from './CustomHtml';

BlockManager.registerBlocks({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendation,
  [CustomBlocksType.MY_FIRST_BLOCK]: MyFirstBlock,
  [CustomBlocksType.CUSTOM_HTML]: CustomHtml
});

BlockAttributeConfigurationManager.add({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendationPanel,
  [CustomBlocksType.MY_FIRST_BLOCK]: MyFirstBlockPanel,
  [CustomBlocksType.CUSTOM_HTML]: CustomHtmlPanel
});
