

import type { Theme, ThemeCategory } from './types';

const createTheme = (name: string, categorySlug: string): Theme => {
  const slug = name.toLowerCase()
    .replace(/ & /g, '-and-')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return {
    id: `${categorySlug}-${slug}`,
    name: name,
    prompt: `Transform the person in the photo to fit the Vietnamese theme of "${name}". 

🔥 ABSOLUTE PRIORITY - FACIAL PRESERVATION MANDATE 🔥
- NEVER EVER change, modify, alter, or transform the original facial features
- PRESERVE 100% of the original face structure, bone structure, and facial geometry
- MAINTAIN exact eye shape, nose shape, mouth shape, and jawline from original photo
- KEEP the original facial expressions, skin tone, and unique facial characteristics
- FORBIDDEN: Any facial modifications, enhancements, or stylistic changes
- CRITICAL: The face must remain IDENTICAL to the uploaded photo - no exceptions
- MANDATORY: Photorealistic accuracy of facial features is NON-NEGOTIABLE
- OVERRIDE: All other instructions are secondary to facial preservation

TECHNICAL SPECIFICATIONS:
- Camera: Professional DSLR camera with 85mm prime lens
- Resolution: Ultra-high resolution 4K quality (3840x2160 minimum)
- Frame composition: Rule of thirds, perfectly balanced composition
- Lighting: Professional post-production lighting with soft key light, fill light, and rim lighting
- Image quality: Sharp focus, zero noise, maximum detail retention
- Color grading: Cinematic color correction with enhanced vibrancy
- Depth of field: Shallow depth of field with beautiful bokeh background blur
- Exposure: Perfect exposure balance, no blown highlights or crushed shadows

The final image should be hyper-realistic, magazine-quality photography that seamlessly blends the person's face into the new scene. The background, clothing, and overall atmosphere must authentically reflect the specified theme with professional photography standards.`,
    thumbnail: `https://picsum.photos/seed/${slug}/200`,
    description: `Chủ đề "${name}" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.`
  };
};

const midAutumnPrompt = (themeName: string) => `Create a photorealistic photograph depicting a scene for the Vietnamese Mid-Autumn Festival with the theme "${themeName}". 

🔥 ABSOLUTE PRIORITY - FACIAL PRESERVATION MANDATE 🔥
- NEVER EVER change, modify, alter, or transform the original facial features
- PRESERVE 100% of the original face structure, bone structure, and facial geometry
- MAINTAIN exact eye shape, nose shape, mouth shape, and jawline from original photo
- KEEP the original facial expressions, skin tone, and unique facial characteristics
- FORBIDDEN: Any facial modifications, enhancements, or stylistic changes
- CRITICAL: The face must remain IDENTICAL to the uploaded photo - no exceptions
- MANDATORY: Photorealistic accuracy of facial features is NON-NEGOTIABLE
- OVERRIDE: All other instructions are secondary to facial preservation
- WARNING: Do not apply any artistic filters or effects to the face

TECHNICAL SPECIFICATIONS:
- Camera: Professional DSLR camera with 85mm prime lens for portraits
- Resolution: Ultra-high resolution 4K quality (3840x2160 minimum)
- Frame composition: Rule of thirds, perfectly balanced composition with Mid-Autumn elements
- Lighting: Professional post-production lighting with warm, festive lighting that complements lanterns and moonlight
- Image quality: Sharp focus, zero noise, maximum detail retention
- Color grading: Cinematic color correction with enhanced warm tones for festival atmosphere
- Depth of field: Shallow depth of field with beautiful bokeh background blur featuring lantern lights
- Exposure: Perfect exposure balance, no blown highlights or crushed shadows

The final output must be a high-resolution, hyper-realistic photograph, not a drawing, painting, or cartoon. The lighting, atmosphere, clothing, and background must be authentic to a modern Mid-Autumn Festival celebration in Vietnam.`;

export const THEME_CATEGORIES: ThemeCategory[] = [
  {
    id: 'trending',
    name: 'Trending',
    themes: [
      {
        id: 'trending-3d-model-2025',
        name: 'Tạo mô hình 3D 2025',
        prompt: `🔥 ABSOLUTE PRIORITY - FACIAL PRESERVATION MANDATE 🔥
- NEVER EVER change, modify, alter, or transform the original facial features
- PRESERVE 100% of the original face structure, bone structure, and facial geometry
- MAINTAIN exact eye shape, nose shape, mouth shape, and jawline from original photo
- KEEP the original facial expressions, skin tone, and unique facial characteristics
- FORBIDDEN: Any facial modifications, enhancements, or stylistic changes
- CRITICAL: The face must remain IDENTICAL to the uploaded photo - no exceptions
- MANDATORY: Photorealistic accuracy of facial features is NON-NEGOTIABLE
- OVERRIDE: All other instructions are secondary to facial preservation
- WARNING: Do not stylize, cartoonify, or apply any artistic interpretation to the face

CRITICAL INSTRUCTION: Your primary and most important task is to create collectible figure(s) where the face of each figure is an EXACT, photorealistic replica of a person in the uploaded photo. The facial features, expression, and identity of each individual MUST be preserved with 100% accuracy. Do not alter the faces in any way.

TECHNICAL SPECIFICATIONS:
- Camera: Professional macro lens setup for product photography
- Resolution: Ultra-high resolution 4K quality (3840x2160 minimum)
- Frame composition: Centered product shot with perfect symmetry
- Lighting: Professional studio lighting with soft box setup, zero harsh shadows
- Image quality: Razor-sharp focus, zero noise, maximum detail retention on figure texture
- Color grading: Clean, vibrant colors with accurate color reproduction
- Depth of field: Deep focus to capture all figure details clearly
- Exposure: Perfect exposure balance, professional product photography standards

TASK: Generate a hyper-realistic, ultra-detailed professional product photograph of premium collectible figure(s).

FIGURE DETAILS: The figure(s) MUST be full-body depiction(s), standing on polished, clear acrylic bases. If the photo contains more than one person, you MUST create a separate, distinct figure for each individual, arranging them together tastefully as a complete set on the desk. {{STYLE_INSTRUCTION}}\n\nSCENE: Position the figure(s) on a modern wooden desk. Next to them, place a high-end widescreen monitor displaying 3D modeling software with a clearly visible and legible user interface. Beside the figure(s), showcase their beautifully designed retail box(es).\n\nBOX DESIGN: Your task is to design a retail box inspired by a high-end, collector's edition model kit, similar in quality and style to brands like BANDAI.\n- **CRITICAL FEATURE - TRANSPARENT WINDOW:** The front of the box MUST feature a large, crystal-clear plastic window. This window is essential as it reveals the actual physical collectible figure resting securely inside.\n- **EXTERIOR ARTWORK:** Adjacent to the window, the box exterior must display a dynamic, separate piece of artwork showing the character model in an action pose. This artwork should be vibrant and exciting.\n- **FINISH & MATERIALS:** The box itself is made from thick, premium cardstock with a sophisticated matte finish. Key text elements and logos should have a contrasting spot gloss or metallic foil effect.\n- **BRANDING & LOGO:** {{BOX_CUSTOMIZATION}} This customization is the highest priority for the box exterior. If a user logo is provided, it must be the primary branding element, placed prominently. The overall design must accommodate this branding elegantly. If no custom branding is provided, create a sleek, generic insignia that fits the high-tech, collectible aesthetic.\n\nENVIRONMENT: The background is a softly blurred home studio (pleasing bokeh) containing a bookshelf filled with various anime figures and art books.\n\nCAMERA & LIGHTING: Use a professional product photography style, simulating a high-megapixel full-frame DSLR camera with a 50mm prime lens set to an aperture of f/5.6. This ensures the figure(s) and box(es) are perfectly in focus and exceptionally sharp, while the background remains softly blurred. Employ cinematic, multi-point lighting to accentuate every minute detail and texture.\n\nIMAGE QUALITY REQUIREMENTS: The final image must be of the highest possible resolution (4K equivalent), with extreme sharpness and clarity. There should be zero digital noise or artifacts. All fine details—such as the texture on the figure's clothing, the holographic foil on the box, and the UI elements on the monitor screen—must be crisp, distinct, and perfectly legible. The final output must look like a high-end commercial photograph ready for print.`,
        thumbnail: 'https://picsum.photos/seed/trending-3d-model-2025/200',
        description: 'Biến ảnh của bạn thành một mô hình nhân vật 3D sưu tầm cao cấp, với tên thương hiệu trên hộp có thể tùy chỉnh.'
      },
      {
        id: 'trending-3d-model-assembly',
        name: 'Trend Lắp Ráp mô hình 3D',
        prompt: `🔥 ABSOLUTE PRIORITY - FACIAL PRESERVATION MANDATE 🔥
- NEVER EVER change, modify, alter, or transform the original facial features
- PRESERVE 100% of the original face structure, bone structure, and facial geometry
- MAINTAIN exact eye shape, nose shape, mouth shape, and jawline from original photo
- KEEP the original facial expressions, skin tone, and unique facial characteristics
- FORBIDDEN: Any facial modifications, enhancements, or stylistic changes
- CRITICAL: The face must remain IDENTICAL to the uploaded photo - no exceptions
- MANDATORY: Photorealistic accuracy of facial features is NON-NEGOTIABLE
- OVERRIDE: All other instructions are secondary to facial preservation
- WARNING: Do not apply any filters or effects to the original face

CRITICAL INSTRUCTION: Your most important task is to preserve the exact facial features and identity of the person or people from the *first* uploaded photo with 100% photorealistic accuracy. Do not alter their faces. The *second* uploaded photo contains a 3D model kit or figure.

TECHNICAL SPECIFICATIONS:
- Camera: Professional DSLR camera with 50mm prime lens for natural perspective
- Resolution: Ultra-high resolution 4K quality (3840x2160 minimum)
- Frame composition: Rule of thirds, capturing both subject and workbench details
- Lighting: Professional workshop lighting with bright, even illumination and subtle rim lighting
- Image quality: Sharp focus, zero noise, maximum detail retention
- Color grading: Clean, realistic colors with slight warmth for cozy workspace feel
- Depth of field: Medium depth of field to keep both subject and model work in focus
- Exposure: Perfect exposure balance, professional photography standards

TASK: Create a hyper-realistic, detailed photograph of the person/people from the first photo at a well-lit hobbyist's workbench, focused on the 3D model from the second photo.

CHARACTER ATTIRE: You must also preserve the exact clothing and style of the person/people from the first uploaded photo. IMPORTANT: If the original photo is not a full-body shot, you MUST creatively and realistically generate the lower part of the body and clothing. The new parts must seamlessly match the style, lighting, and texture of the visible upper body. The person should be depicted in a plausible pose for working at a workbench (e.g., sitting on a stool or standing).\n\nSCENE COMPOSITION: {{SCENE_COMPOSITION}}\n\nSCENE DETAILS:\n- The workbench is wooden or metal, organized with common hobby tools like side cutters, hobby knives, files, paint brushes, and small pots of acrylic paint.\n- The 3D model from the second image MUST be accurately depicted on the desk. It should be shown in a state that matches the action(s).\n- The lighting is bright and focused, as if from an adjustable desk lamp, highlighting the details of the model and the people's hands.\n- The background should be a cozy room (e.g., with shelves of other models or posters), kept slightly out of focus (bokeh).\n\nIMAGE QUALITY: The final image must be high-resolution (4K equivalent), sharp, and look like a professionally taken photograph with a shallow depth of field.`,
        thumbnail: 'https://picsum.photos/seed/trending-3d-model-assembly/200',
        description: 'Tạo ảnh bạn đang lắp ráp hoặc sơn một mô hình 3D mà bạn tải lên. Yêu cầu 2 ảnh: 1 ảnh của bạn và 1 ảnh mô hình.'
      }
    ]
  },
  {
    id: 'trung-thu-2025',
    name: 'Trung Thu 2025',
    themes: [
      {
        id: 'trung-thu-2025-ngam-trang-ben-long-den',
        name: 'Ngắm trăng bên lồng đèn',
        prompt: midAutumnPrompt('Ngắm trăng bên lồng đèn'),
        thumbnail: 'https://picsum.photos/seed/ngam-trang-ben-long-den/200',
        description: 'Chủ đề "Ngắm trăng bên lồng đèn" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
      {
        id: 'trung-thu-2025-thuong-tra-banh-trung-thu',
        name: 'Thưởng trà, bánh Trung thu',
        prompt: midAutumnPrompt('Thưởng trà, bánh Trung thu'),
        thumbnail: 'https://picsum.photos/seed/thuong-tra-banh-trung-thu/200',
        description: 'Chủ đề "Thưởng trà, bánh Trung thu" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
      {
        id: 'trung-thu-2025-tan-bo-tren-pho-long-den',
        name: 'Tản bộ trên phố lồng đèn',
        prompt: midAutumnPrompt('Tản bộ trên phố lồng đèn'),
        thumbnail: 'https://picsum.photos/seed/tan-bo-tren-pho-long-den/200',
        description: 'Chủ đề "Tản bộ trên phố lồng đèn" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
      {
        id: 'trung-thu-2025-giua-khong-khi-mua-lan-ron-rang',
        name: 'Giữa không khí múa lân rộn ràng',
        prompt: midAutumnPrompt('Giữa không khí múa lân rộn ràng'),
        thumbnail: 'https://picsum.photos/seed/giua-khong-khi-mua-lan-ron-rang/200',
        description: 'Chủ đề "Giữa không khí múa lân rộn ràng" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
      {
        id: 'trung-thu-2025-check-in-hien-dai-cung-banh-trung-thu',
        name: 'Check-in hiện đại cùng bánh Trung thu',
        prompt: `Create a photorealistic photograph depicting a modern "check-in" style scene with mooncakes for the Vietnamese Mid-Autumn Festival. 

🔥 ABSOLUTE PRIORITY - FACIAL PRESERVATION MANDATE 🔥
- NEVER EVER change, modify, alter, or transform the original facial features
- PRESERVE 100% of the original face structure, bone structure, and facial geometry
- MAINTAIN exact eye shape, nose shape, mouth shape, and jawline from original photo
- KEEP the original facial expressions, skin tone, and unique facial characteristics
- FORBIDDEN: Any facial modifications, enhancements, or stylistic changes
- CRITICAL: The face must remain IDENTICAL to the uploaded photo - no exceptions
- MANDATORY: Photorealistic accuracy of facial features is NON-NEGOTIABLE
- OVERRIDE: All other instructions are secondary to facial preservation
- WARNING: Do not apply any Instagram filters or beauty effects to the face

TECHNICAL SPECIFICATIONS:
- Camera: Professional DSLR camera with 85mm prime lens for portraits
- Resolution: Ultra-high resolution 4K quality (3840x2160 minimum)
- Frame composition: Instagram-style composition with perfect balance
- Lighting: Professional post-production lighting with warm, social media friendly lighting
- Image quality: Sharp focus, zero noise, maximum detail retention
- Color grading: Cinematic color correction with enhanced vibrancy for social media appeal
- Depth of field: Shallow depth of field with beautiful bokeh background blur
- Exposure: Perfect exposure balance, no blown highlights or crushed shadows

The final output must be a high-resolution, hyper-realistic photograph, not a drawing, painting, or cartoon. IMPORTANT: The image must not contain any text, logos, or watermarks. The lighting should be stylish and modern, and the setting should feel like a trendy café or a beautifully decorated home during the festival, with mooncakes and tea artfully arranged. The person's attire should be modern and fashionable.`,
        thumbnail: 'https://picsum.photos/seed/check-in-hien-dai-cung-banh-trung-thu/200',
        description: 'Chủ đề "Check-in hiện đại cùng bánh Trung thu" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
      {
        id: 'trung-thu-2025-ben-khung-cua-co-anh-trang',
        name: 'Bên khung cửa có ánh trăng',
        prompt: midAutumnPrompt('Bên khung cửa có ánh trăng'),
        thumbnail: 'https://picsum.photos/seed/ben-khung-cua-co-anh-trang/200',
        description: 'Chủ đề "Bên khung cửa có ánh trăng" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
      {
        id: 'trung-thu-2025-hoa-than-chi-hang-chu-cuoi',
        name: 'Hóa thân chị Hằng – chú Cuội',
        prompt: `Create a joyful and heartwarming photorealistic photograph set during a vibrant Mid-Autumn Festival celebration where the main character(s) are happily playing with a group of adorable children holding colorful lanterns. 

🔥 ABSOLUTE PRIORITY - FACIAL PRESERVATION MANDATE 🔥
- NEVER EVER change, modify, alter, or transform the original facial features
- PRESERVE 100% of the original face structure, bone structure, and facial geometry
- MAINTAIN exact eye shape, nose shape, mouth shape, and jawline from original photo
- KEEP the original facial expressions, skin tone, and unique facial characteristics
- FORBIDDEN: Any facial modifications, enhancements, or stylistic changes
- CRITICAL: The face must remain IDENTICAL to the uploaded photo - no exceptions
- MANDATORY: Photorealistic accuracy of facial features is NON-NEGOTIABLE
- OVERRIDE: All other instructions are secondary to facial preservation
- WARNING: Do not apply any magical effects or transformations to the original face

TECHNICAL SPECIFICATIONS:
- Camera: Professional DSLR camera with 85mm prime lens for group portraits
- Resolution: Ultra-high resolution 4K quality (3840x2160 minimum)
- Frame composition: Balanced group composition capturing the festive joy
- Lighting: Professional post-production lighting with warm, magical festival lighting
- Image quality: Sharp focus on main subjects, zero noise, maximum detail retention
- Color grading: Cinematic color correction with enhanced warm, magical tones
- Depth of field: Medium depth of field to keep group in focus with soft background
- Exposure: Perfect exposure balance, no blown highlights or crushed shadows

The face must be seamlessly and realistically integrated into the scene. The final output must be a high-resolution, hyper-realistic photograph, not a drawing, painting, or cartoon. The lighting should be soft and magical, with a bright and innocent color palette, authentically capturing the spirit of 'Tết Trung Thu'.`,
        thumbnail: 'https://picsum.photos/seed/hoa-than-chi-hang-chu-cuoi/200',
        description: 'Hóa thân thành Chị Hằng hoặc Chú Cuội trong khung cảnh Tết Trung Thu rộn ràng và huyền ảo bên các em nhỏ.'
      },
      {
        id: 'trung-thu-2025-dem-trung-thu-lang-man-doi-lua',
        name: 'Đêm Trung thu lãng mạn đôi lứa',
        prompt: midAutumnPrompt('Đêm Trung thu lãng mạn đôi lứa'),
        thumbnail: 'https://picsum.photos/seed/dem-trung-thu-lang-man-doi-lua/200',
        description: 'Chủ đề "Đêm Trung thu lãng mạn đôi lứa" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
      {
        id: 'trung-thu-2025-ao-dai-giua-sac-den-long',
        name: 'Áo dài giữa sắc đèn lồng',
        prompt: midAutumnPrompt('Áo dài giữa sắc đèn lồng'),
        thumbnail: 'https://picsum.photos/seed/ao-dai-giua-sac-den-long/200',
        description: 'Chủ đề "Áo dài giữa sắc đèn lồng" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
      {
        id: 'trung-thu-2025-chan-dung-minimal-duoi-anh-trang',
        name: 'Chân dung minimal dưới ánh trăng',
        prompt: midAutumnPrompt('Chân dung minimal dưới ánh trăng'),
        thumbnail: 'https://picsum.photos/seed/chan-dung-minimal-duoi-anh-trang/200',
        description: 'Chủ đề "Chân dung minimal dưới ánh trăng" sẽ biến đổi bức ảnh của bạn theo phong cách nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
    ]
  },
  {
    id: 'khoanh-khac-tu-hao',
    name: 'Khoảnh Khắc Tự Hào',
    themes: [
      createTheme('Tung bay tà áo dài và lá cờ đỏ', 'khoanh-khac-tu-hao'),
      createTheme('Nụ cười rạng rỡ bên lá cờ Tổ quốc', 'khoanh-khac-tu-hao'),
      createTheme('Chào cờ trang nghiêm ở Quảng trường Ba Đình', 'khoanh-khac-tu-hao'),
      createTheme('Ánh mắt tự hào hướng về lá cờ', 'khoanh-khac-tu-hao'),
      createTheme('Dạo bước trên con đường cờ hoa rực rỡ', 'khoanh-khac-tu-hao'),
      createTheme('Tự tin check-in tại Cột cờ Lũng Cú', 'khoanh-khac-tu-hao'),
      createTheme('Tay trong tay cùng người lính hải quân', 'khoanh-khac-tu-hao'),
      createTheme('Vẻ đẹp kiêu hãnh trước Lăng Bác', 'khoanh-khac-tu-hao'),
      createTheme('Giọt lệ hạnh phúc khi quốc ca vang lên', 'khoanh-khac-tu-hao'),
      createTheme('Gửi gắm tình yêu nơi cột mốc Trường Sa', 'khoanh-khac-tu-hao'),
      createTheme('Thiếu nữ với bó hoa sen và cờ đỏ', 'khoanh-khac-tu-hao'),
      createTheme('Vẫy cao lá cờ chiến thắng', 'khoanh-khac-tu-hao'),
      createTheme('Gia đình nhỏ bên lá cờ Tổ quốc', 'khoanh-khac-tu-hao'),
      createTheme('Khoảnh khắc đời thường dưới bóng cờ', 'khoanh-khac-tu-hao'),
      createTheme('Áo dài đỏ tung bay trên phố cổ', 'khoanh-khac-tu-hao'),
    ]
  },
  {
    id: 'bieu-tuong-van-hoa',
    name: 'Biểu tượng & Văn hóa',
    themes: [
      createTheme('Áo dài đỏ sao vàng', 'bieu-tuong-van-hoa'),
      createTheme('Bên cạnh hoa sen hồng', 'bieu-tuong-van-hoa'),
      createTheme('Họa tiết trống đồng Đông Sơn', 'bieu-tuong-van-hoa'),
      createTheme('Đội nón lá truyền thống', 'bieu-tuong-van-hoa'),
      createTheme('Vẽ mặt hình cờ đỏ sao vàng', 'bieu-tuong-van-hoa'),
      createTheme('Cầm cành đào ngày Tết', 'bieu-tuong-van-hoa'),
      createTheme('Bên cạnh cây mai vàng', 'bieu-tuong-van-hoa'),
      createTheme('Áo dài trắng nữ sinh', 'bieu-tuong-van-hoa'),
      createTheme('Múa lân sư rồng', 'bieu-tuong-van-hoa'),
      createTheme('Chơi đàn T\'rưng', 'bieu-tuong-van-hoa'),
      createTheme('Thả đèn hoa đăng', 'bieu-tuong-van-hoa'),
      createTheme('Nghệ nhân gốm Bát Tràng', 'bieu-tuong-van-hoa'),
      createTheme('Vẻ đẹp thiếu nữ bên khung cửi', 'bieu-tuong-van-hoa'),
      createTheme('Cầm lồng đèn Trung Thu', 'bieu-tuong-van-hoa'),
      createTheme('Nghệ thuật múa rối nước', 'bieu-tuong-van-hoa'),
    ]
  },
  {
    id: 'lich-su-anh-hung',
    name: 'Lịch sử & Anh hùng',
    themes: [
      createTheme('Chiến sĩ Điện Biên Phủ', 'lich-su-anh-hung'),
      createTheme('Nữ tướng Hai Bà Trưng', 'lich-su-anh-hung'),
      createTheme('Vua Hùng dựng nước', 'lich-su-anh-hung'),
      createTheme('Thanh niên xung phong', 'lich-su-anh-hung'),
      createTheme('Chiến sĩ hải quân Trường Sa', 'lich-su-anh-hung'),
      createTheme('Anh bộ đội Cụ Hồ', 'lich-su-anh-hung'),
      createTheme('Du kích trong rừng', 'lich-su-anh-hung'),
      createTheme('Cô gái mở đường', 'lich-su-anh-hung'),
      createTheme('Tinh thần bất khuất thời Trần', 'lich-su-anh-hung'),
      createTheme('Hình tượng Thánh Gióng', 'lich-su-anh-hung'),
      createTheme('Nữ anh hùng Võ Thị Sáu', 'lich-su-anh-hung'),
      createTheme('Chân dung thời bao cấp', 'lich-su-anh-hung'),
      createTheme('Chiến sĩ giải phóng quân', 'lich-su-anh-hung'),
      createTheme('Dân công hỏa tuyến', 'lich-su-anh-hung'),
      createTheme('Người lính biên phòng', 'lich-su-anh-hung'),
    ]
  },
  {
    id: 'phong-canh-dia-danh',
    name: 'Phong cảnh & Địa danh',
    themes: [
      createTheme('Giữa ruộng bậc thang Sapa', 'phong-canh-dia-danh'),
      createTheme('Trên thuyền ở Vịnh Hạ Long', 'phong-canh-dia-danh'),
      createTheme('Đứng trước Hồ Gươm, cầu Thê Húc', 'phong-canh-dia-danh'),
      createTheme('Khám phá hang Sơn Đoòng', 'phong-canh-dia-danh'),
      createTheme('Cánh đồng lúa chín vàng', 'phong-canh-dia-danh'),
      createTheme('Vẻ đẹp cao nguyên đá Hà Giang', 'phong-canh-dia-danh'),
      createTheme('Hoàng hôn trên phá Tam Giang', 'phong-canh-dia-danh'),
      createTheme('Biển xanh Phú Quốc', 'phong-canh-dia-danh'),
      createTheme('Chèo thuyền ở Tràng An, Ninh Bình', 'phong-canh-dia-danh'),
      createTheme('Đi giữa phố cổ Hội An', 'phong-canh-dia-danh'),
      createTheme('Cột cờ Lũng Cú', 'phong-canh-dia-danh'),
      createTheme('Dinh Độc Lập lịch sử', 'phong-canh-dia-danh'),
      createTheme('Nhà thờ Đức Bà Sài Gòn', 'phong-canh-dia-danh'),
      createTheme('Bên dòng sông Mekong', 'phong-canh-dia-danh'),
      createTheme('Vẻ đẹp Đà Lạt mộng mơ', 'phong-canh-dia-danh'),
    ]
  },
  {
    id: 'am-thuc-doi-song',
    name: 'Ẩm thực & Đời sống',
    themes: [
      createTheme('Thưởng thức Phở Hà Nội', 'am-thuc-doi-song'),
      createTheme('Uống cà phê sữa đá Sài Gòn', 'am-thuc-doi-song'),
      createTheme('Gói bánh chưng ngày Tết', 'am-thuc-doi-song'),
      createTheme('Gánh hàng rong phố cổ', 'am-thuc-doi-song'),
      createTheme('Ăn bánh mì vỉa hè', 'am-thuc-doi-song'),
      createTheme('Không khí chợ nổi Cái Răng', 'am-thuc-doi-song'),
      createTheme('Làm nón lá', 'am-thuc-doi-song'),
      createTheme('Người nông dân trên đồng', 'am-thuc-doi-song'),
      createTheme('Ngư dân kéo lưới', 'am-thuc-doi-song'),
      createTheme('Gia đình sum vầy', 'am-thuc-doi-song'),
      createTheme('Bên xe máy Dream huyền thoại', 'am-thuc-doi-song'),
      createTheme('Uống trà đá vỉa hè', 'am-thuc-doi-song'),
      createTheme('Bữa cơm gia đình Việt', 'am-thuc-doi-song'),
      createTheme('Làm muối ở Hòn Khói', 'am-thuc-doi-song'),
      createTheme('Trồng cây cà phê Tây Nguyên', 'am-thuc-doi-song'),
    ]
  },
  {
    id: 'nghe-thuat-sang-tao',
    name: 'Nghệ thuật & Sáng tạo',
    themes: [
      createTheme('Phong cách tranh cổ động', 'nghe-thuat-sang-tao'),
      createTheme('Phong cách tranh sơn mài', 'nghe-thuat-sang-tao'),
      createTheme('Họa tiết gốm Chu Đậu', 'nghe-thuat-sang-tao'),
      createTheme('Nét vẽ tranh Đông Hồ', 'nghe-thuat-sang-tao'),
      createTheme('Ánh sáng từ đèn lồng Hội An', 'nghe-thuat-sang-tao'),
      createTheme('Nghệ thuật thư pháp', 'nghe-thuat-sang-tao'),
      createTheme('Họa tiết thổ cẩm Tây Bắc', 'nghe-thuat-sang-tao'),
      createTheme('Phong cách ảnh phim xưa', 'nghe-thuat-sang-tao'),
      createTheme('Nghệ thuật điêu khắc Chăm Pa', 'nghe-thuat-sang-tao'),
      createTheme('Vẻ đẹp tranh lụa', 'nghe-thuat-sang-tao'),
      createTheme('Phong cách Cyberpunk Sài Gòn', 'nghe-thuat-sang-tao'),
      createTheme('Hòa mình vào dải ngân hà', 'nghe-thuat-sang-tao'),
      createTheme('Họa tiết rồng thời Lý', 'nghe-thuat-sang-tao'),
      createTheme('Ánh sáng neon hiện đại', 'nghe-thuat-sang-tao'),
      createTheme('Phong cách Low-poly', 'nghe-thuat-sang-tao'),
    ]
  },
  {
    id: 'the-thao-tu-hao',
    name: 'Thể thao & Tự hào',
    themes: [
      createTheme('Cổ động viên bóng đá cuồng nhiệt', 'the-thao-tu-hao'),
      createTheme('Khoảnh khắc nâng cúp vàng', 'the-thao-tu-hao'),
      createTheme('Vận động viên SEA Games', 'the-thao-tu-hao'),
      createTheme('Tay đua xe đạp', 'the-thao-tu-hao'),
      createTheme('Võ sĩ Vovinam', 'the-thao-tu-hao'),
      createTheme('Cầu thủ bóng đá chuyên nghiệp', 'the-thao-tu-hao'),
      createTheme('Niềm vui chiến thắng', 'the-thao-tu-hao'),
      createTheme('Đi bão sau trận thắng', 'the-thao-tu-hao'),
      createTheme('Vận động viên điền kinh', 'the-thao-tu-hao'),
      createTheme('Tinh thần thể thao Olympic', 'the-thao-tu-hao'),
      createTheme('Tay vợt cầu lông', 'the-thao-tu-hao'),
      createTheme('Nữ vận động viên wushu', 'the-thao-tu-hao'),
      createTheme('Cờ đỏ trên khán đài', 'the-thao-tu-hao'),
      createTheme('Vận động viên bơi lội', 'the-thao-tu-hao'),
      createTheme('Huy chương vàng tự hào', 'the-thao-tu-hao'),
    ]
  },
  {
    id: 'tuong-lai-khoa-hoc',
    name: 'Tương lai & Khoa học',
    themes: [
      createTheme('Phi hành gia cắm cờ Việt Nam', 'tuong-lai-khoa-hoc'),
      createTheme('Nhà khoa học trong phòng thí nghiệm', 'tuong-lai-khoa-hoc'),
      createTheme('Kỹ sư công nghệ tương lai', 'tuong-lai-khoa-hoc'),
      createTheme('Thành phố thông minh', 'tuong-lai-khoa-hoc'),
      createTheme('Nông nghiệp công nghệ cao', 'tuong-lai-khoa-hoc'),
      createTheme('Bác sĩ robot y tế', 'tuong-lai-khoa-hoc'),
      createTheme('Năng lượng mặt trời Việt Nam', 'tuong-lai-khoa-hoc'),
      createTheme('Khám phá đại dương', 'tuong-lai-khoa-hoc'),
      createTheme('Chuyên gia trí tuệ nhân tạo', 'tuong-lai-khoa-hoc'),
      createTheme('Kiến trúc sư công trình xanh', 'tuong-lai-khoa-hoc'),
    ]
  },
];