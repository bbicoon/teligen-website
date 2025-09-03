const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// 압축할 이미지 파일들
const imageFiles = [
  'office25.jpg',
  'ggoddong.jpg',
  'ktwiz.jpg'
];

async function compressAndConvertToWebP() {
  console.log('🖼️  이미지 압축 및 WebP 변환 시작...\n');

  for (const filename of imageFiles) {
    const inputPath = path.join(publicDir, filename);
    const outputPath = path.join(publicDir, filename.replace('.jpg', '.webp'));
    
    if (!fs.existsSync(inputPath)) {
      console.log(`❌ ${filename} 파일을 찾을 수 없습니다.`);
      continue;
    }

    try {
      // 원본 파일 크기 확인
      const originalStats = fs.statSync(inputPath);
      const originalSize = (originalStats.size / 1024).toFixed(2);
      
      console.log(`📁 처리 중: ${filename}`);
      console.log(`   원본 크기: ${originalSize} KB`);

      // WebP로 변환 및 압축
      await sharp(inputPath)
        .webp({ 
          quality: 85,  // 품질 85% (품질과 용량의 균형)
          effort: 6     // 압축 노력 수준 (0-6, 높을수록 더 압축)
        })
        .toFile(outputPath);

      // 변환된 파일 크기 확인
      const compressedStats = fs.statSync(outputPath);
      const compressedSize = (compressedStats.size / 1024).toFixed(2);
      
      // 용량 절약 계산
      const savedSize = (originalStats.size - compressedStats.size / 1024).toFixed(2);
      const savedPercent = ((1 - compressedStats.size / originalStats.size) * 100).toFixed(1);
      
      console.log(`   압축 후: ${compressedSize} KB`);
      console.log(`   절약: ${savedSize} KB (${savedPercent}%)`);
      console.log(`   ✅ ${filename.replace('.jpg', '.webp')} 생성 완료\n`);

    } catch (error) {
      console.error(`❌ ${filename} 처리 중 오류 발생:`, error.message);
    }
  }

  console.log('🎉 모든 이미지 변환 완료!');
}

// 스크립트 실행
compressAndConvertToWebP().catch(console.error);
