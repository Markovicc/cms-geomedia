/**
 * interaktiv controller
 */

import { factories } from '@strapi/strapi'


export default factories.createCoreController('api::interaktiv.interaktiv', ({ strapi }) => ({

    // Method 3: Replacing a core action
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::interaktiv.interaktiv').findOne({
            where: { slug: id },
            populate: ['image', 'iframe', 'seo']
           
           
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
        return this.transformResponse(sanitizedEntity);
    }
  }));