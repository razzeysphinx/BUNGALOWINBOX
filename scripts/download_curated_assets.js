import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://bungalowinabox.com/';

// Target directory structure in public
const assetMap = [
  // Categories & Heroes
  { remote: 'images/casco_bay/woodlands_ext.jpg', local: 'public/images/projects/hero.jpg' },
  { remote: 'images/portfolio_montsweag.jpg', local: 'public/images/projects/final-cta.jpg' },
  { remote: 'images/portfolio_cascobay.jpg', local: 'public/images/categories/homes.jpg' },
  { remote: 'images/portfolio_lily.jpg', local: 'public/images/categories/cottages.jpg' },
  { remote: 'images/portfolio_cottage_finish.jpg', local: 'public/images/categories/adus.jpg' },
  { remote: 'images/portfolio_teachers.jpg', local: 'public/images/categories/barns.jpg' },
  { remote: 'images/portfolio_cumberland_2.jpg', local: 'public/images/categories/events.jpg' },
  { remote: 'images/portfolio_pergola.jpg', local: 'public/images/categories/outdoor.jpg' },

  // Team & Workshop
  { remote: 'images/about_raoul.jpg', local: 'public/images/team/raoul.jpg' },
  { remote: 'images/about_vicki.jpg', local: 'public/images/team/vicki.jpg' },
  { remote: 'images/about_osciris.jpg', local: 'public/images/team/oscar-iris.jpg' },
  { remote: 'images/about_raoulvicki.jpg', local: 'public/images/team/founders.jpg' },
  { remote: 'images/about_cranes.jpg', local: 'public/images/team/cranes.jpg' },
  { remote: 'images/portfolio_montsweag_crane.jpg', local: 'public/images/process/crane-raising.jpg' },
  { remote: 'images/portfolio_joy_crane.jpg', local: 'public/images/process/raising-woolwich.jpg' },
  { remote: 'images/unboxing_water.jpg', local: 'public/images/process/timber-staining.jpg' },
  { remote: 'images/unboxing_loon.jpg', local: 'public/images/process/loon-carving.jpg' },
  { remote: 'images/unboxing_santa.jpg', local: 'public/images/process/santa-chalet-build.jpg' },

  // Brand
  { remote: 'images/nav/icons/biab_logo.png', local: 'public/images/brand/logo.png' },
  { remote: 'images/nav/embossed_logo.png', local: 'public/images/brand/embossed-logo.png' },

  // Casco Bay (Featured Case Study)
  { remote: 'images/casco_bay/woodlands_ext.jpg', local: 'public/images/projects/casco-bay/hero.jpg' },
  { remote: 'images/casco_bay/casco_fp.jpg', local: 'public/images/projects/casco-bay/floor-plan.jpg' },
  { remote: 'images/casco_bay/casco_bay_3d.jpg', local: 'public/images/projects/casco-bay/elevation-3d.jpg' },
  { remote: 'images/casco_bay/woodlands_living.jpg', local: 'public/images/projects/casco-bay/living.jpg' },
  { remote: 'images/casco_bay/woodlands_kitchen.jpg', local: 'public/images/projects/casco-bay/kitchen.jpg' },
  { remote: 'images/casco_bay/woodlands_stair.jpg', local: 'public/images/projects/casco-bay/stair.jpg' },
  { remote: 'images/casco_bay/woodlands_dining.jpg', local: 'public/images/projects/casco-bay/dining.jpg' },
  { remote: 'images/casco_bay/woodlands_porch.jpg', local: 'public/images/projects/casco-bay/porch.jpg' },
  { remote: 'images/casco_bay/woodlands_away.jpg', local: 'public/images/projects/casco-bay/away-room.jpg' },
  { remote: 'images/casco_bay/woodlands_outdoordining.jpg', local: 'public/images/projects/casco-bay/outdoor-dining.jpg' },
  { remote: 'images/casco_bay/casco_bent.jpg', local: 'public/images/projects/casco-bay/bent-raising.jpg' },
  { remote: 'images/casco_bay/casco_morticetenon.jpg', local: 'public/images/projects/casco-bay/joinery.jpg' },
  { remote: 'images/casco_bay/casco_barge_panels.jpg', local: 'public/images/projects/casco-bay/barge-delivery.jpg' },
  { remote: 'images/casco_bay/casco_rafter1.jpg', local: 'public/images/projects/casco-bay/rafters.jpg' },

  // Other Projects Signature Images
  { remote: 'images/portfolio_cumberland_2.jpg', local: 'public/images/projects/cumberland/hero.jpg' },
  { remote: 'images/portfolio_teachers.jpg', local: 'public/images/projects/teachers-barn/hero.jpg' },
  { remote: 'images/portfolio_island.jpg', local: 'public/images/projects/island/hero.jpg' },
  { remote: 'images/portfolio_joy.jpg', local: 'public/images/projects/joy/hero.jpg' },
  { remote: 'images/portfolio_montsweag.jpg', local: 'public/images/projects/montsweag/hero.jpg' },
  { remote: 'images/portfolio_lily.jpg', local: 'public/images/projects/lily/hero.jpg' },
  { remote: 'images/portfolio_middlebury.jpg', local: 'public/images/projects/middlebury/hero.jpg' },
  { remote: 'images/portfolio_lake.jpg', local: 'public/images/projects/lakehouse/hero.jpg' },
  { remote: 'images/portfolio_harpswell.jpg', local: 'public/images/projects/harpswell/hero.jpg' },
  { remote: 'images/22_harp_beauty.jpg', local: 'public/images/projects/harpswell/beauty.jpg' },
  { remote: 'images/portfolio_phippsburg.jpg', local: 'public/images/projects/phippsburg/hero.jpg' },
  { remote: 'images/portfolio_cottage_finish.jpg', local: 'public/images/projects/cottage-cape/hero.jpg' },
  { remote: 'images/portfolio_madison.jpg', local: 'public/images/projects/madison/hero.jpg' },
  { remote: 'images/portfolio_pocono.jpg', local: 'public/images/projects/pocono/hero.jpg' },
  { remote: 'images/portfolio_waterford.jpg', local: 'public/images/projects/waterford/hero.jpg' },
  { remote: 'images/portfolio_gotham.jpg', local: 'public/images/projects/gotham/hero.jpg' },
  { remote: 'images/portfolio_writers.jpg', local: 'public/images/projects/writers-cabin/hero.jpg' },
  { remote: 'images/portfolio_pergola.jpg', local: 'public/images/projects/pergola/hero.jpg' },
  { remote: 'images/custom_pergola.jpg', local: 'public/images/projects/pergola/detail.jpg' },
  { remote: 'images/portfolio_pagoda.jpg', local: 'public/images/projects/pagoda/hero.jpg' },
  { remote: 'images/custom_pagoda.jpg', local: 'public/images/projects/pagoda/detail.jpg' },
  { remote: 'images/portfolio_gazebo.jpg', local: 'public/images/projects/gazebo/hero.jpg' },
  { remote: 'images/custom_chalet.jpg', local: 'public/images/projects/santa-chalet/hero.jpg' },
  { remote: 'images/custom_dresden.jpg', local: 'public/images/projects/dresden/hero.jpg' },
  { remote: 'images/custom_addition.jpg', local: 'public/images/projects/guest-addition/hero.jpg' },
  { remote: 'images/custom_csh.jpg', local: 'public/images/projects/entry/hero.jpg' },
  { remote: 'images/pricing/24x28.jpg', local: 'public/images/projects/sturbridge/hero.jpg' },
  { remote: 'images/pricing/12x16.jpg', local: 'public/images/projects/brigadoon/hero.jpg' },
  { remote: 'images/pricing/8x8_PanelFrame.jpg', local: 'public/images/projects/panel-frame/hero.jpg' }
];

async function downloadAll() {
  console.log(`Starting download of ${assetMap.length} curated authentic assets...`);
  let successCount = 0;

  for (const item of assetMap) {
    const dir = path.dirname(item.local);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      const url = BASE_URL + item.remote;
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`[SKIP ${res.status}] ${url}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(item.local, buffer);
      successCount++;
      console.log(`[OK] ${item.local} (${Math.round(buffer.length / 1024)} KB)`);
    } catch (err) {
      console.error(`[ERR] ${item.remote}:`, err.message);
    }
  }

  console.log(`\nFinished downloading ${successCount}/${assetMap.length} assets.`);
}

downloadAll();
