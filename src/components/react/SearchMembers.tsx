interface Location {
  lat: number;
  lng: number;
}

interface Anggota {
  id: number;
  fullName: string;
  address: string;
  kelurahan: string;
  kecamatan: string;
  phone: string[];
  email: string;
  location?: Location;
  avatar: string;
}

interface Props {
  data: Anggota[]
}

// DataSearchComponent.tsx
import React, { useState } from 'react';
import { AnggotaCard } from "@/components/react/AnggotaCard";
import { Input } from "@/components/ui/input";

export const SearchMembers: React.FC<Props> = ({ data }) => {
  const [query, setQuery] = useState('');
  const [filterdData, setFilterdData] = useState<Anggota[]>(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery) {
      const result = data.filter(person =>
        person.fullName.toLowerCase().includes(searchQuery) ||
        person.kelurahan.toLowerCase().includes(searchQuery) ||
        person.kecamatan.toLowerCase().includes(searchQuery)
      );
      setFilterdData(result)
    } else {
      setFilterdData(data)
    }
  }

  return (
    <>
      <div className="z-10 py-2 mb-6">
        <div className="prose lg:prose-lg">
          <Input
            value={query}
            onChange={handleSearch}
            placeholder="Pencairan Anggota berdasarkan Nama dan/atau Alamat"
          />
        </div>
      </div>
      <div className="mx-auto mb-8 lg:mb-16">
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-start mx-auto">
          {
            filterdData.map((user, i) => (
              <AnggotaCard
                fullName={user.fullName}
                address={user.address}
                phone={user.phone}
                email={user.email}
                avatar={user.avatar}
              />
            ))
          }
        </div>
      </div>

    </>
  )
}