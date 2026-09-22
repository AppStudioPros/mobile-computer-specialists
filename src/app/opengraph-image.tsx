import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'
export const alt = 'Mobile Computer Specialists — Denver\'s Mobile IT Experts'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = await readFile(path.join(process.cwd(), 'public', 'mcs-logo-og.jpg'))
  const logoBase64 = `data:image/jpeg;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0f2347 100%)',
          padding: '0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blue glow accent top-right */}
        <div style={{
          position: 'absolute', top: -100, right: -60,
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0) 70%)',
          display: 'flex',
        }} />

        {/* Bottom left glow */}
        <div style={{
          position: 'absolute', bottom: -80, left: 200,
          width: 320, height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, rgba(37,99,235,0) 70%)',
          display: 'flex',
        }} />

        {/* Left: Logo */}
        <div style={{
          width: '48%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 32px',
        }}>
          <img
            src={logoBase64}
            alt="MCS Logo"
            style={{
              width: 360,
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Divider */}
        <div style={{
          width: 1,
          height: 320,
          background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.4), transparent)',
          display: 'flex',
          flexShrink: 0,
        }} />

        {/* Right: Info */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '48px 52px 48px 44px',
        }}>
          {/* Tag */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 20,
          }}>
            <div style={{
              width: 32,
              height: 3,
              background: '#2563eb',
              borderRadius: 2,
              display: 'flex',
            }} />
            <span style={{
              color: '#60a5fa',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Denver, Colorado
            </span>
          </div>

          {/* Headline */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 38,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: 16,
          }}>
            <span>Mobile Computer</span>
            <span>Specialists</span>
          </div>

          {/* Subline */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 17,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.5,
            marginBottom: 28,
          }}>
            <span>We come to you. Free diagnostics.</span>
            <span>No trip fee. No obligation.</span>
          </div>

          {/* Pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Computer Repairs & IT Support', 'Custom PC Builds', 'Business Technology'].map((item) => (
              <div key={item} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <div style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#2563eb',
                  display: 'flex',
                  flexShrink: 0,
                }} />
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* URL */}
          <div style={{
            marginTop: 28,
            fontSize: 13,
            color: '#2563eb',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}>
            mobilecomputerspecialists.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
