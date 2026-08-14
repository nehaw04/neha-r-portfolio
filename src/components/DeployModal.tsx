import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

interface DeployModalProps {
  open: boolean;
  onClose: () => void;
}

const DeployModal = ({ open, onClose }: DeployModalProps) => {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  if (!open) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText('nehar.xiaeroor@email.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={handleBackdropClick}
      style={{
        background: 'rgba(12,12,20,0.85)',
        backdropFilter: 'blur(12px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 300ms cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      <div
        className="relative w-full max-w-md p-8 grid-bg"
        style={{
          background: '#0C0C14',
          border: '1px solid rgba(185,127,255,0.2)',
          borderRadius: 20,
          transform: visible ? 'scale(1)' : 'scale(0.95)',
          opacity: visible ? 1 : 0,
          transition: 'transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-lg transition-colors hover:text-white"
          style={{ color: 'rgba(226,224,255,0.62)' }}
        >
          ✕
        </button>

        {/* Eyebrow */}
        <span
          className="font-mono block mb-3"
          style={{ fontSize: 13, letterSpacing: 3, color: '#B97FFF' }}
        >
          // ready_to_deploy
        </span>

        {/* Title */}
        <h2
          className="mb-6"
          style={{ fontFamily: 'Outfit', fontSize: 36, fontWeight: 900, color: 'white', lineHeight: 1.15 }}
        >
          Let's build something smart.
        </h2>

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          {/* Copy Email */}
          <button
            onClick={handleCopy}
            className="flex items-center justify-between w-full font-mono transition-all hover:border-[rgba(185,127,255,0.4)]"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(185,127,255,0.2)',
              borderRadius: 10,
              padding: '16px 20px',
              color: copied ? '#5FFFA0' : 'var(--text-muted)',
              fontSize: 14,
            }}
          >
            <span>{copied ? '✓ Copied!' : 'nehar.xiaeroor@email.com'}</span>
            {copied ? <Check size={14} color="#5FFFA0" /> : <Copy size={14} />}
          </button>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nehxr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full font-mono transition-all hover:border-[rgba(185,127,255,0.4)]"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(185,127,255,0.2)',
              borderRadius: 10,
              padding: '16px 20px',
              color: 'var(--text-muted)',
              fontSize: 14,
            }}
          >
            <span>LinkedIn — linkedin.com/in/nehxr</span>
            <span style={{ color: '#E040FB' }}>↗</span>
          </a>

          {/* Schedule a Call */}
          <a
            href="https://calendly.com/nehar-xiaeroor/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full font-mono transition-all hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #7B5EA7, #E040FB)',
              borderRadius: 10,
              padding: '16px 20px',
              color: 'white',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            <span>Schedule a Call — Calendly</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeployModal;
