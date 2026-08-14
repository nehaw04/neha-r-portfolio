const tags = [
  'NLP', 'Deep Learning', 'YOLOv8', 'BERT', 'SHAP', 'Transformers',
  'PyTorch', 'RAG', 'LangChain', 'MLOps', 'Computer Vision', 'OCR',
  'Agentic AI', 'Data Mining', 'Salesforce', 'AWS', 'Docker', 'FastAPI',
];

const MarqueeStrip = () => {
  const items = [...tags, ...tags]; // duplicate for seamless loop

  return (
    <div
      className="w-full overflow-hidden py-4"
      style={{
        background: 'rgba(185,127,255,0.03)',
        borderTop: '1px solid rgba(120,100,255,0.08)',
        borderBottom: '1px solid rgba(120,100,255,0.08)',
      }}
    >
      <div className="marquee-track flex items-center whitespace-nowrap">
        {items.map((tag, i) => (
          <span key={`${tag}-${i}`} className="flex items-center">
            <span
              className="font-mono mx-6"
              style={{
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'rgba(226,224,255,0.4)',
              }}
            >
              {tag}
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: 'rgba(185,127,255,0.35)' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
